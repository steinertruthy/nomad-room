import { iUser } from "../..";
import { ContainerPhoto, Photo } from "./styles";

interface iProfileProps {
  user: iUser;
}

export const Profile = ({ user }: iProfileProps) => {
  const { profile_photo, name } = user;

  return (
    <ContainerPhoto>
      <Photo>
        <img src={profile_photo} alt={name} />
      </Photo>
      <p>{name}</p>
    </ContainerPhoto>
  );
};
