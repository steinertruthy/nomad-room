import { iRequestGetRoom } from "../..";
import { Localization } from "./Localization";
import { ContainerHeadline } from "./styles";

interface iHeadlineProps {
  room: iRequestGetRoom;
}

export const Headline = ({ room }: iHeadlineProps) => {
  const { title } = room;
  return (
    <ContainerHeadline>
      <h2>{title}</h2>
      <Localization room={room} />
    </ContainerHeadline>
  );
};
