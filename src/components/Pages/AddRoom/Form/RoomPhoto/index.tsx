import { UseFormRegister, FieldErrors } from "react-hook-form";
import { InputGroup } from "../../../../Global/InputGroup";
import { iFormAddRoom } from "../@types";
import { ContainerInput, TextInput } from "../styles";

interface iRoomPhoto {
  register: UseFormRegister<any>;
  errors: FieldErrors<iFormAddRoom>;
}

export const RoomPhoto = ({ register, errors }: iRoomPhoto) => {
  return (
    <ContainerInput>
      <TextInput>Informe a URL da foto*</TextInput>
      <InputGroup
        placeholder="Ex: https://i.imgur.com/RhUBg4U.jpeg"
        register={register("room_photo")}
        msgError={errors.room_photo?.message}
      />
    </ContainerInput>
  );
};
