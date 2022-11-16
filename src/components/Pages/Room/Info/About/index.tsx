import { iRequestGetRoom } from "../..";
import { Animals } from "./IconsAbout/Animals";
import { Furnished } from "./IconsAbout/Furnished";
import { Garage } from "./IconsAbout/Garage";
import { Gym } from "./IconsAbout/Gym";
import { Internet } from "./IconsAbout/Internet";
import { Tv } from "./IconsAbout/Tv";
import { ContainerAbout } from "./styles";

interface iAboutProps {
  room: iRequestGetRoom;
}

export const About = ({ room }: iAboutProps) => {
  const { about } = room;
  const { gym, internet, tv, garage, animals, furnished } = about;

  return (
    <ContainerAbout>
      <h2>Sobre o quarto disponível</h2>

      {gym && <Gym />}
      {internet && <Internet />}
      {tv && <Tv />}
      {garage && <Garage />}
      {animals && <Animals />}
      {furnished && <Furnished />}
    </ContainerAbout>
  );
};
