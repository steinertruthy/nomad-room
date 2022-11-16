import { useContext } from "react";
import { DashboardContext } from ".";

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  return context;
};
