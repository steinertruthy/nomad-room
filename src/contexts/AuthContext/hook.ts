import { AuthContext } from ".";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
