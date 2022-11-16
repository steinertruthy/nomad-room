import { CgSearch } from "react-icons/cg";
import { useDashboard } from "../../../../../contexts/DashboardContext/hook";
import { Button } from "../../../../../styles/components/Buttons";
import { ContainerSearchRoomState } from "./styles";

export const SearchRoomState = () => {
  const { handleSearchStates, inputSearch, handleSearchRooms } = useDashboard();

  return (
    <>
      <ContainerSearchRoomState onSubmit={handleSearchRooms}>
        <CgSearch size={30} />
        <input
          type="text"
          placeholder="Para onde você quer ir?"
          onChange={handleSearchStates}
          value={inputSearch}
        />
        <Button type="submit">Quartos</Button>
      </ContainerSearchRoomState>
    </>
  );
};
