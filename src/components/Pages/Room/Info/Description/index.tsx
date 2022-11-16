import { iRequestGetRoom } from "../..";
import { ContainerDescription } from "./styles";

interface iDescriptionProps {
  room: iRequestGetRoom;
}

export const Description = ({ room }: iDescriptionProps) => {
  const { description } = room;
  return (
    <ContainerDescription>
      <h2>Descrição do quarto disponível</h2>
      <p>{description}</p>
    </ContainerDescription>
  );
};
