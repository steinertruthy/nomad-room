import { iRequestGetRoom } from "..";
import { ContainerPhoto } from "./styles";

interface iPhotoProps {
  room: iRequestGetRoom;
}

export const Photo = ({ room }: iPhotoProps) => {
  const { room_photo, title } = room;
  return (
    <ContainerPhoto>
      <img src={room_photo} alt={title} />
    </ContainerPhoto>
  );
};
