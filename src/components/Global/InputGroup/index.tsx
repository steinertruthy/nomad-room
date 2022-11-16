import { Ref } from "react";
import { InputHTMLAttributes } from "react";
import { ChangeHandler } from "react-hook-form";
import { ContainerInputGroup, Input, InputError } from "./styles";

export interface iRegister {
  onChnage?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref: Ref<any>;
  name: string;
}

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: iRegister;
  msgError?: string;
}

export const InputGroup = ({ register, msgError, ...rest }: iInputProps) => {
  return (
    <ContainerInputGroup>
      <Input {...register} {...rest} />
      {msgError && <InputError>{msgError}</InputError>}
    </ContainerInputGroup>
  );
};
