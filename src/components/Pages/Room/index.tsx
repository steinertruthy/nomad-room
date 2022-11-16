import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { ContainerWrapper } from "../../../styles/containers";
import { Header } from "../../Global/Header";
import { iRoom } from "../Home/@types";
import { Contact } from "./Contact";
import { Info } from "./Info";
import { Photo } from "./Photo/index";
import { ContainerPhotoContact } from "./styles";

export interface iUser {
  name: string;
  profile_photo: string;
}

export interface iRequestGetRoom extends iRoom {
  user: iUser;
}

export const Room = () => {
  const [room, setRoom] = useState({} as iRequestGetRoom);
  const { id } = useParams();

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await api.get<iRequestGetRoom>(`/rooms/${id}`, {
          params: {
            _expand: "user",
          },
        });

        const { data } = response;
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRoom();
  }, [id]);

  if (!room.id) {
    return null;
  }

  return (
    <>
      <Header />
      <ContainerWrapper>
        <ContainerPhotoContact>
          <Photo room={room} />
          <Contact room={room} />
        </ContainerPhotoContact>
        <Info room={room} />
      </ContainerWrapper>
    </>
  );
};
