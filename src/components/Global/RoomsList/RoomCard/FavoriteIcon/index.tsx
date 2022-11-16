import { ContainerFavoriteIcon } from "./styles";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { iRoom } from "../../../../Pages/Home/@types";
import { api } from "../../../../../services/api";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../../../contexts/AuthContext/hook";

interface iFavoriteIconProps {
  room: iRoom;
}

export const FavoriteIcon = ({ room }: iFavoriteIconProps) => {
  const { user, setUser } = useAuthContext();
  const token = localStorage.getItem("@nomadRoom:token");
  const userId = Number(localStorage.getItem("@nomadRoom:userId"));

  const { rooms_favorites } = user;
  const idsRoomsFavorites = rooms_favorites?.map(({ id }) => id);

  const handleCreateFavorite = (room: iRoom): void => {
    if (idsRoomsFavorites.includes(room.id)) {
      handleRmvFavorite(room);
    } else {
      handleAddFavorire(room);
    }
  };

  const handleAddFavorire = async (roomFavorited: any): Promise<void> => {
    const newRoomsFavorites = [...rooms_favorites, roomFavorited];

    const updateRoomsFavoritesUser = {
      rooms_favorites: newRoomsFavorites,
    };

    try {
      await api.patch(`/users/${userId}`, updateRoomsFavoritesUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Quarto adicionado aos favoritos");
      handleUpdateUserState(newRoomsFavorites);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRmvFavorite = async (room: iRoom) => {
    const roomsFiltered = rooms_favorites.filter(({ id }) => id != room.id);
    const updateRoomsFavoritesUser = {
      rooms_favorites: roomsFiltered,
    };

    try {
      await api.patch(`/users/${userId}`, updateRoomsFavoritesUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.info("Quarto removido dos favoritos");
      handleUpdateUserState(roomsFiltered);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUserState = (arrRooms: iRoom[]) => {
    const updateUser = {
      ...user,
      rooms_favorites: arrRooms,
    };

    setUser(updateUser);
  };

  return (
    <ContainerFavoriteIcon
      isFavorite={user.id ? idsRoomsFavorites.includes(room.id) : false}
      onClick={() => handleCreateFavorite(room)}
    >
      <MdOutlineFavoriteBorder />
    </ContainerFavoriteIcon>
  );
};
