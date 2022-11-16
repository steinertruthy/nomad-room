import { ChangeEvent, RefObject, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { iFormAddRoom } from "../@types";
import { viaCepApi } from "../../../../../services/viaCepApi";
import { InputGroup } from "../../../../Global/InputGroup";
import { ContainerInput, TextInput } from "../styles";

interface iLocalizationProps {
  formRef: RefObject<HTMLFormElement>;
  register: UseFormRegister<any>;
  errors: FieldErrors<iFormAddRoom>;
}

interface iRequestHandleZipCode {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const Localization = ({
  formRef,
  register,
  errors,
}: iLocalizationProps) => {
  const [inputsValue, setInputsValue] = useState({
    inputStreet: "",
    inputDistrict: "",
    inputCity: "",
    inputState: "",
  });

  const handleZipCode = async (e: ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value;

    if (cep.length == 8) {
      try {
        const response = await viaCepApi.get<iRequestHandleZipCode>(
          `/${cep}/json`
        );

        const { data } = response;
        handleSetAddress(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSetAddress = (data: iRequestHandleZipCode) => {
    const { logradouro, bairro, localidade, uf } = data;

    const updateInputs = {
      inputStreet: logradouro,
      inputDistrict: bairro,
      inputCity: localidade,
      inputState: uf,
    };

    setInputsValue(updateInputs);

    // const formElements = formRef.current?.elements;
    // if (formElements?.length) {
    //   const inputDistrict = formElements.namedItem(
    //     "district"
    //   ) as HTMLInputElement;
    //   const inputLocale = formElements.namedItem("state") as HTMLInputElement;
    //   const inputStreet = formElements.namedItem("street") as HTMLInputElement;

    //   inputDistrict.value = bairro;
    //   inputLocale.value = `${localidade}, ${uf}`;
    //   inputStreet.value = `${logradouro}`;
    // }
  };

  return (
    <ContainerInput>
      <TextInput>Localização do quarto*</TextInput>
      <InputGroup
        type="text"
        placeholder="CEP"
        register={register("zip_code")}
        onChange={handleZipCode}
        msgError={errors.zip_code?.message}
      />
      <InputGroup
        type="text"
        placeholder="Rua"
        register={register("street")}
        msgError={errors.street?.message}
        defaultValue={inputsValue.inputStreet}
      />
      <InputGroup
        type="text"
        placeholder="Bairro"
        register={register("district")}
        msgError={errors.district?.message}
        defaultValue={inputsValue.inputDistrict}
      />
      <InputGroup
        type="text"
        placeholder="Cidade"
        register={register("city")}
        msgError={errors.city?.message}
        defaultValue={inputsValue.inputCity}
      />
      <InputGroup
        type="text"
        placeholder="Estado"
        register={register("state")}
        msgError={errors.state?.message}
        defaultValue={inputsValue.inputState}
      />
      <InputGroup
        type="number"
        placeholder="Numero"
        register={register("number")}
        msgError={errors.number?.message}
      />
    </ContainerInput>
  );
};
