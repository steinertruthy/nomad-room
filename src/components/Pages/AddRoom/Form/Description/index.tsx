import { FieldErrors, UseFormRegister } from "react-hook-form";
import { iFormAddRoom } from "../@types";
import { TextareaGroup } from "../../../../Global/TextareaGroup";
import { ContainerInput, TextInput } from "../styles";

interface iDescriptionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<iFormAddRoom>;
}

export const Description = ({ register, errors }: iDescriptionProps) => {
  return (
    <ContainerInput>
      <TextInput>Descrição</TextInput>
      <TextareaGroup
        heigth="big"
        placeholder="Descreava bem sua acomandação, quem você está procurando. Mão informe dados pessoais."
        register={register("description")}
        msgError={errors.description?.message}
      />
    </ContainerInput>
  );
};
