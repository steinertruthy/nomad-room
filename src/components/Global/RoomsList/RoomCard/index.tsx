import { MouseEvent } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { Heading, Text } from "../../../../styles/components/Typography";
import { CardContent, CardImage, ContainerCard } from "./styles";
import { FavoriteIcon } from "./FavoriteIcon";
import { iRoom } from "../../../Pages/Home/@types";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";

interface iRoomCardProps {
  room: iRoom;
}

export const RoomCard = ({ room }: iRoomCardProps) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const {
    id,
    title,
    description,
    localization: { district, city, state },
    room_photo,
  } = room;

  const handleClick = (e: MouseEvent) => {
    if (user.validation) {
      const elementClicked = e.target as HTMLElement;
      const iconFavorite = elementClicked.closest("button");
      const card = elementClicked.closest("li");

      if (!iconFavorite && card) {
        const idRoom = card.id;
        navigate(`/room/${idRoom}`);
      }
    } else {
      if (user.id) {
        navigate("/validation");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <ContainerCard id={String(id)} onClick={handleClick}>
      <FavoriteIcon room={room} />
      <CardImage>
        <img src={room_photo} alt={title} />
      </CardImage>
      <CardContent>
        <Heading fontWeight={500}>{title}</Heading>
        <Text>{description}</Text>
        <div className="content__localization">
          <TfiLocationPin />
          <Text tag="span">
            {district} - {city}, {state}
          </Text>
        </div>
      </CardContent>
    </ContainerCard>
  );
};
