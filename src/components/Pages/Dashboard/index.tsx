import { useDashboard } from "../../../contexts/DashboardContext/hook";
import { Header } from "../../Global/Header";
import { RoomsList } from "../../Global/RoomsList";
import { HeadlineSearch } from "./HeadlineSearch";

export const Dashboard = () => {
  const { listRoomsFiltered } = useDashboard();

  return (
    <>
      <Header />
      <HeadlineSearch />
      <RoomsList rooms={listRoomsFiltered} />
    </>
  );
};
