import { ContainerTextareaGroup, Textarea, TextareaError } from "./styles";
import { TextareaHTMLAttributes } from "react";
import { iRegister } from "../InputGroup";

interface iTextareaGroup extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  heigth?: "big" | "medium";
  register?: iRegister;
  msgError?: string;
}
export const TextareaGroup = ({
  heigth,
  placeholder,
  register,
  msgError,
  ...rest
}: iTextareaGroup) => {
  return (
    <ContainerTextareaGroup>
      <Textarea
        heigth={heigth}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {msgError && <TextareaError>{msgError}</TextareaError>}
    </ContainerTextareaGroup>
  );
};
