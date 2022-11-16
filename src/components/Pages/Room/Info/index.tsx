import { iRequestGetRoom } from "..";
import { About } from "./About";
import { Description } from "./Description";
import { Headline } from "./Headline";
import { ContainerInfo } from "./styles";

interface iInfoProps {
  room: iRequestGetRoom;
}

export const Info = ({ room }: iInfoProps) => {
  return (
    <ContainerInfo>
      <Headline room={room} />
      <About room={room} />
      <Description room={room} />
    </ContainerInfo>
  );
};
