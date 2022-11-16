import { ReactNode, Dispatch, SetStateAction } from "react";
import { iRoom } from "../../components/Pages/Home/@types";
import { iFormLogin } from "../../components/Pages/Login/FormLogin";
import { iFormRegister } from "../../components/Pages/Register/FormRegister";
import { iFormValidationUser } from "../../components/Pages/ValidationUser/FormValidationUser";

export interface iUser {
  email: string;
  name: string;
  last_name: string;
  age: number;
  genre: string;
  profession: string;
  validation: boolean;
  profile_photo: string | null;
  description: string | null;
  rooms_favorites: iRoom[];
  id: number;
}

export interface iAuthContext {
  user: iUser;
  handleLogin: (data: iFormLogin) => Promise<void>;
  handleRegister: (data: iFormRegister) => Promise<void>;
  handleValidation: (data: iFormValidationUser) => Promise<void>;
  handleLogout: () => void;
  setUser: Dispatch<SetStateAction<iUser>>;
  isLoading: boolean;
}

export interface iAuthProvider {
  children: ReactNode;
}

export interface iRequestHandleLogin {
  accessToken: string;
  user: iUser;
}

export interface iRequestHandleRegister extends iRequestHandleLogin {}
