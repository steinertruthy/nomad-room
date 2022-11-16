import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { ContainerUserMenu, Photo } from "./styles";
import profile from "../../../../assets/profile.svg";
import { Menu } from "./Menu";

export const UserMenu = () => {
  const { user } = useAuthContext();
  const { profile_photo, name } = user;

  return (
    <ContainerUserMenu>
      <Photo>
        <img src={profile_photo || profile} alt={name} />
      </Photo>
      <Menu />
    </ContainerUserMenu>
  );
};
