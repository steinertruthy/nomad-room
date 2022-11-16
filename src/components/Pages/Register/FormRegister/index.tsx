import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputGroup } from "../../../Global/InputGroup";
import { Form } from "../../../../styles/components/Form";
import { Heading } from "../../../../styles/components/Typography";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { SelectGroup } from "../../../Global/SelectGroup";
import { Button } from "../../../../styles/components/Buttons";
import { schemaRegister } from "../../../../validations/schemaRegister";

export interface iFormRegister {
  name: string;
  last_name: string;
  email: string;
  password: string;
  age: number;
  profession: string;
  genre: string;
}

export const FormRegister = () => {
  const { handleRegister } = useAuthContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const genres = ["Gênero", "Masculino", "Feminino"];
  const professions = [
    "Profissão",
    "Estudante",
    "Profissional",
    "Aposentado",
    "Outros",
  ];

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <Heading fontSize="title2">Faça seu cadastro</Heading>
      <InputGroup
        type="text"
        placeholder="Nome"
        register={register("name")}
        msgError={errors.name?.message}
      />
      <InputGroup
        type="text"
        placeholder="Sobre nome"
        register={register("last_name")}
        msgError={errors.last_name?.message}
      />
      <InputGroup
        type="email"
        placeholder="Email"
        register={register("email")}
        msgError={errors.email?.message}
      />
      <InputGroup
        type="password"
        placeholder="Senha"
        register={register("password")}
        msgError={errors.password?.message}
      />
      <InputGroup
        type="text"
        placeholder="idade"
        register={register("age")}
        msgError={errors.age?.message}
      />

      <SelectGroup
        defaultValue=""
        register={register("genre")}
        msgError={errors.genre?.message}
      >
        {genres.map((genre, index) => (
          <option
            key={index}
            value={index != 0 ? genre : ""}
            disabled={index == 0}
          >
            {genre}
          </option>
        ))}
      </SelectGroup>
      <SelectGroup
        defaultValue=""
        register={register("profession")}
        msgError={errors.profession?.message}
      >
        {professions.map((profession, index) => (
          <option
            key={index}
            value={index != 0 ? profession : ""}
            disabled={index == 0}
          >
            {profession}
          </option>
        ))}
      </SelectGroup>

      <Button type="submit" width="100%">
        Cadastrar-se
      </Button>
    </Form>
  );
};
