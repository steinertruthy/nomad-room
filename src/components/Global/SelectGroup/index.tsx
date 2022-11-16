import { ReactNode, SelectHTMLAttributes } from "react";
import { iRegister } from "../InputGroup";
import { ContainerSelectGroup, Select, SelectError } from "./styles";

interface iSelectGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  register?: iRegister;
  msgError?: string;
}

export const SelectGroup = ({
  children,
  register,
  msgError,
  ...rest
}: iSelectGroupProps) => {
  return (
    <ContainerSelectGroup>
      <Select {...register} {...rest}>
        {children}
      </Select>
      {msgError && <SelectError>{msgError}</SelectError>}
    </ContainerSelectGroup>
  );
};
