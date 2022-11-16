import { iRequestGetRoom } from "..";
import { ButtonWhatsApp } from "./ButtonWhastApp";
import { Profile } from "./Profile";
import { ContainerContact } from "./styles";

interface icontactProps {
  room: iRequestGetRoom;
}

export const Contact = ({ room }: icontactProps) => {
  const { user } = room;

  return (
    <ContainerContact>
      <Profile user={user} />
      <ButtonWhatsApp room={room} />
    </ContainerContact>
  );
};
