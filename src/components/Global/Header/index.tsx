import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { ContainerWrapper } from "../../../styles/containers";
import { Buttons } from "./Buttons";
import { ContainerHeader } from "./styles";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const { user } = useAuthContext();

  return (
    <ContainerHeader>
      <ContainerWrapper className="container__wrapper">
        <Link to={user.validation ? "/dashboard" : "/"}>
          <h2></h2>
        </Link>
        {user.id ? <UserMenu /> : <Buttons />}
      </ContainerWrapper>
    </ContainerHeader>
  );
};
