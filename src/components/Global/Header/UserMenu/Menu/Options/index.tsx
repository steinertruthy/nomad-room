import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../../../contexts/AuthContext/hook";
import { ContainerOptions } from "./styles";

export const Options = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <ContainerOptions>
      {user.validation && (
        <>
          <li>
            <Link to="/add/room" target="_self">
              Disponibilizar quarto
            </Link>
          </li>

          <li>
            <Link to="/favorites" target="_self">
              Favoritos
            </Link>
          </li>
        </>
      )}

      <li onClick={handleLogout}>
        <Link to="/" target="_self">
          Sair
        </Link>
      </li>
    </ContainerOptions>
  );
};
