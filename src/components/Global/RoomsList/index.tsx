import { iRoom } from "../../Pages/Home/@types";
import { ContainerWrapper } from "../../../styles/containers";
import { RoomCard } from "./RoomCard";
import { ContainerRoomList } from "./styles";

interface iRoomsListProps {
  rooms: iRoom[];
}

export const RoomsList = ({ rooms }: iRoomsListProps) => {
  return (
    <ContainerWrapper>
      <ContainerRoomList>
        {rooms.length > 0 &&
          rooms.map((room: iRoom) => {
            return <RoomCard key={room.id} room={room} />;
          })}
      </ContainerRoomList>
    </ContainerWrapper>
  );
};
