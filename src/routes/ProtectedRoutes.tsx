import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext/hook";

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  return <>{user.id ? <Outlet /> : <Navigate to="/" />}</>;
};
