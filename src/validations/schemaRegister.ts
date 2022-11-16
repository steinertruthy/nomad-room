import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(3, "O nome precisa ter no mínimo 3 caracteres."),
  last_name: yup
    .string()
    .required("O sobrenome é obrigatório.")
    .min(3, "O sobrenome deve ter no mínimo 3 caracteres."),
  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("O email deve ser uma email válido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha deve ter no mínimo 8 caracteres."),
  age: yup
    .number()
    .typeError("Sua idade é obrigatória.")
    .integer("Informe um número inteiro.")
    .min(18, "Sua idade mínima deve ser de 18 anos.")
    .max(100, "Sua idade máxima deve ser de no máximo 100 anos. '-'"),
  genre: yup.string().required("Informe seu gênero"),
  profession: yup.string().required("Informe sua profissão."),
});
