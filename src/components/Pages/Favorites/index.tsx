import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { Headline } from "../../../styles/components/Headline";
import { Heading } from "../../../styles/components/Typography";
import { Header } from "../../Global/Header";
import { RoomsList } from "../../Global/RoomsList";

export const Favorites = () => {
  const {
    user: { rooms_favorites },
  } = useAuthContext();

  return (
    <>
      <Header />
      <Headline height="medium">
        <Heading fontSize="title1" fontWeight={600} color="white">
          Quartos Favoritos
        </Heading>
      </Headline>

      <RoomsList rooms={rooms_favorites} />
    </>
  );
};
