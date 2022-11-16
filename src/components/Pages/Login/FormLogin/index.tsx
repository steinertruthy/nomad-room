import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputGroup } from "../../../Global/InputGroup";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { Button } from "../../../../styles/components/Buttons";
import { Form } from "../../../../styles/components/Form";
import { Heading } from "../../../../styles/components/Typography";
import { schemaLogin } from "../../../../validations/schemaLogin";

export interface iFormLogin {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { handleLogin } = useAuthContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Heading fontSize="title2">Faça seu login</Heading>
      <InputGroup
        placeholder="email"
        type="email"
        register={register("email")}
        msgError={errors.email?.message}
      />
      <InputGroup
        placeholder="Senha"
        type="password"
        register={register("password")}
        msgError={errors.password?.message}
      />

      <Button type="submit" width="100%">
        Login
      </Button>
    </Form>
  );
};
