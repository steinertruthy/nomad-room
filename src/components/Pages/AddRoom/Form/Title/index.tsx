import { UseFormRegister, FieldErrors } from "react-hook-form";
import { iFormAddRoom } from "../@types";
import { InputGroup } from "../../../../Global/InputGroup";
import { ContainerInput, TextInput } from "../styles";

interface iTitleProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<iFormAddRoom>;
}

export const Title = ({ register, errors }: iTitleProps) => {
  return (
    <ContainerInput>
      <TextInput>Título*</TextInput>
      <InputGroup
        placeholder="Ex: Quarto com vista para mar no Flamengo "
        register={register("title")}
        msgError={errors.title?.message}
      />
    </ContainerInput>
  );
};
