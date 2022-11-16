import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { schemaValidationUser } from "../../../../validations/schemaValidationUser";
import { Form } from "../../../../styles/components/Form";
import { Heading } from "../../../../styles/components/Typography";
import { InputGroup } from "../../../Global/InputGroup";
import { TextareaGroup } from "../../../Global/TextareaGroup";
import { Button } from "../../../../styles/components/Buttons";
import { ContainerForm } from "./styles";

export interface iFormValidationUser {
  profile_photo: string;
  description: string;
}

export const FormValidationUser = () => {
  const { handleValidation } = useAuthContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormValidationUser>({
    resolver: yupResolver(schemaValidationUser),
  });

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(handleValidation)}>
        <Heading fontSize="title2">Finalize seu cadastro</Heading>
        <Heading fontSize="title3">
          Carregue uma foto sua e diga mais sobre você
        </Heading>

        <InputGroup
          placeholder="Ex: https://i.imgur.com/RhUBg4U.jpeg"
          register={register("profile_photo")}
          msgError={errors.profile_photo?.message}
        />
        <TextareaGroup
          heigth="medium"
          placeholder="Fale um pouco sobre você. xD"
          register={register("description")}
          msgError={errors.description?.message}
        />

        <Button type="submit">Finalizar</Button>
      </Form>
    </ContainerForm>
  );
};
