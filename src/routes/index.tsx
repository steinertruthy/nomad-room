import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { RegisterPage } from "../pages/register";
import { LoginPage } from "../pages/login";
import { ValidationUserPage } from "../pages/validationUser";
import { DashboardPage } from "../pages/dashboard";
import { AddRoomPage } from "../pages/addRoom";
import { RoomPage } from "../pages/room";
import { FavoritesPage } from "../pages/favorites";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/validation" element={<ValidationUserPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add/room" element={<AddRoomPage />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
