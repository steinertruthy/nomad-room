import { ContainerMenu } from "./styles";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAuthContext } from "../../../../../contexts/AuthContext/hook";
import { Options } from "./Options";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const { name } = user;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerMenu onClick={handleMenu}>
      <p>{name}</p>
      <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>

      {isOpen && <Options />}
    </ContainerMenu>
  );
};
