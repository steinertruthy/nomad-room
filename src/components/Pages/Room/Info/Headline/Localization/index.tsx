import { TfiLocationPin } from "react-icons/tfi";
import { iRequestGetRoom } from "../../..";
import { Containerlocalization } from "./styles";

interface iLocalizationProps {
  room: iRequestGetRoom;
}

export const Localization = ({ room }: iLocalizationProps) => {
  const {
    localization: { district, city, state },
  } = room;

  return (
    <Containerlocalization>
      <TfiLocationPin />
      <span>
        {district} - {city}, {state}
      </span>
    </Containerlocalization>
  );
};
