import { ButtonLogin } from "./ButtonLogin";
import { ButtonRegister } from "./ButtonRegister";
import { ContainerButtons } from "./styles";

export const Buttons = () => {
  const pathUrl = window.location.pathname;

  return (
    <ContainerButtons>
      {pathUrl == "/" && (
        <>
          <ButtonRegister />
          <ButtonLogin />
        </>
      )}

      {pathUrl == "/login" && <ButtonRegister />}
      {pathUrl == "/register" && <ButtonLogin />}
    </ContainerButtons>
  );
};
