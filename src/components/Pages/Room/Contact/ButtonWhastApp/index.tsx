import { RiWhatsappLine } from "react-icons/ri";
import { iRequestGetRoom } from "../..";
import { ContainerButtonWhatsApp } from "./styles";

interface iButtonWhastAppProps {
  room: iRequestGetRoom;
}

export const ButtonWhatsApp = ({ room }: iButtonWhastAppProps) => {
  const {
    contact,
    user: { name },
  } = room;
  const text = `Olá, ${name}! Tudo bem? Acabei de ver seu anúncio sobre o quarto disponível, podemos conversar? xD`;
  const link = `https://api.whatsapp.com/send?phone=55${contact}&text=${text}`;

  return (
    <ContainerButtonWhatsApp href={link} target="_blank">
      <RiWhatsappLine />
      <span>WhatsApp</span>
    </ContainerButtonWhatsApp>
  );
};
