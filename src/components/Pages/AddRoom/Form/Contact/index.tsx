import { RefObject, KeyboardEvent } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { iFormAddRoom } from "../@types";
import { InputGroup } from "../../../../Global/InputGroup";
import { ContainerInput, TextInput } from "../styles";

interface iContactProps {
  formRef: RefObject<HTMLFormElement> | null;
  register: UseFormRegister<any>;
  errors: FieldErrors<iFormAddRoom>;
}

export const Contact = ({ formRef, register, errors }: iContactProps) => {
  let numberFormatted = "";
  const handleMaskContact = (e: KeyboardEvent<HTMLInputElement>) => {
    //Regex for only numbers
    const regex = /\D/g;
    const value = e.currentTarget.value;
    const numberInput = value.replaceAll(regex, "");

    let numberMask = "";
    for (let i = 0; i < numberInput.length; i++) {
      if (numberInput.length < 13) {
        if (i == 0) numberMask += `(`;

        if (i == 2) numberMask += `) `;

        if (i == 7) numberMask += `-`;

        numberMask += numberInput[i];
        numberFormatted = numberMask;

        setMaskInput(numberMask);
      } else {
        setMaskInput(numberFormatted);
      }
    }
  };

  const setMaskInput = (mask: string) => {
    if (formRef) {
      const formElements = formRef.current?.elements;
      const inputContact = formElements?.namedItem(
        "contact"
      ) as HTMLInputElement;
      inputContact.value = mask;
    }
  };

  return (
    <ContainerInput>
      <TextInput>Contato*</TextInput>
      <InputGroup
        placeholder="Ex: 21 99999 22191"
        register={register("contact")}
        msgError={errors.contact?.message}
        onKeyUp={handleMaskContact}
      />
    </ContainerInput>
  );
};
