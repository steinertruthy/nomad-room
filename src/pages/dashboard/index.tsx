import { Dashboard } from "../../components/Pages/Dashboard";
import { DashboardProvider } from "../../contexts/DashboardContext";

export const DashboardPage = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};
