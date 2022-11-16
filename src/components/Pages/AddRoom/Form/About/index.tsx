import { UseFormRegister } from "react-hook-form";
import { ContainerInput, TextInput } from "../styles";
import { ContainerAbout, ContainerCheckbox } from "./styles";

interface iAboutProps {
  register: UseFormRegister<any>;
}

export const About = ({ register }: iAboutProps) => {
  return (
    <ContainerInput>
      <TextInput>Sobre o quarto</TextInput>
      <ContainerAbout>
        <ContainerCheckbox htmlFor="gym">
          Academia
          <input id="gym" type="checkbox" {...register("gym")} />
          <span></span>
        </ContainerCheckbox>
        <ContainerCheckbox htmlFor="internet">
          Internet
          <input id="internet" type="checkbox" {...register("internet")} />
          <span></span>
        </ContainerCheckbox>
        <ContainerCheckbox htmlFor="tv">
          Tv
          <input id="tv" type="checkbox" {...register("tv")} />
          <span></span>
        </ContainerCheckbox>
        <ContainerCheckbox htmlFor="garage">
          Garagem
          <input id="garage" type="checkbox" {...register("garage")} />
          <span></span>
        </ContainerCheckbox>
        <ContainerCheckbox htmlFor="animals">
          Aceita animais
          <input id="animals" type="checkbox" {...register("animals")} />
          <span></span>
        </ContainerCheckbox>
        <ContainerCheckbox htmlFor="furnished">
          Mobiliado
          <input id="furnished" type="checkbox" {...register("furnished")} />
          <span></span>
        </ContainerCheckbox>
      </ContainerAbout>
    </ContainerInput>
  );
};
