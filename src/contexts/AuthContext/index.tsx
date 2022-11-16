import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iFormLogin } from "../../components/Pages/Login/FormLogin";
import { iFormRegister } from "../../components/Pages/Register/FormRegister";
import { iFormValidationUser } from "../../components/Pages/ValidationUser/FormValidationUser";
import { api } from "../../services/api";
import {
  iAuthContext,
  iAuthProvider,
  iRequestHandleLogin,
  iRequestHandleRegister,
  iUser,
} from "./@types";

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [user, setUser] = useState({} as iUser);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@nomadRoom:token");
    const userId = localStorage.getItem("@nomadRoom:userId");

    const handleAutoLogin = async (): Promise<void> => {
      try {
        const response = await api.get<iUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response;

        if (data.validation) {
          navigate("/dashboard");
        } else {
          navigate("/validation");
        }

        setUser(data);
      } catch (error) {
        localStorage.removeItem("@nomadRoom:token");
        localStorage.removeItem("@nomadRoom:userId");
        console.error(error);
      }
    };

    if (token) {
      handleAutoLogin();
    }
  }, []);

  const handleLogin = async (data: iFormLogin): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.post<iRequestHandleLogin>("/login", data);
      const { accessToken, user } = response.data;
      localStorage.setItem("@nomadRoom:token", accessToken);
      localStorage.setItem("@nomadRoom:userId", `${user.id}`);
      toast.success("Login realizado com sucesso.");

      if (user.validation) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/validation", { replace: true });
      }

      setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: iFormRegister): Promise<void> => {
    setIsLoading(true);
    const newData = {
      ...data,
      validation: false,
      profile_photo: null,
      description: null,
      rooms_favorites: [],
    };

    try {
      const response = await api.post<iRequestHandleRegister>(
        "/register",
        newData
      );

      const { accessToken, user } = response.data;
      localStorage.setItem("@nomadRoom:token", accessToken);
      localStorage.setItem("@nomadRoom:userId", `${user.id}`);

      toast.success("Cadastro realizado com sucesso.");
      navigate("/validation", { replace: true });
      setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleValidation = async (data: iFormValidationUser): Promise<void> => {
    setIsLoading(true);
    const { profile_photo, description } = data;
    const token = localStorage.getItem("@nomadRoom:token");
    const userId = localStorage.getItem("@nomadRoom:userId");

    const updateUser = {
      validation: true,
      profile_photo: profile_photo,
      description: description,
    };

    try {
      await api.patch(`/users/${userId}`, updateUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newUser = {
        ...user,
        ...updateUser,
      };

      navigate("/dashboard", { replace: true });
      setUser(newUser);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("@nomadRoom:token");
    localStorage.removeItem("@nomadRoom:userId");
    setUser({} as iUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleValidation,
        handleLogout,
        setUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
