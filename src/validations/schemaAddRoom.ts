import * as yup from "yup";

export const schemaAddRoom = yup.object().shape({
  title: yup
    .string()
    .required("Informe o título do quarto.")
    .min(16, "O título deve ter no mínimo 16 caracteres.")
    .trim(),
  description: yup
    .string()
    .required("Informe a descrição do quarto.")
    .min(20, "A descrição deve ter no mínimo 20 caracteres.")
    .trim(),
  gym: yup.boolean(),
  internet: yup.boolean(),
  tv: yup.boolean(),
  garage: yup.boolean(),
  animals: yup.boolean(),
  furnished: yup.boolean(),
  zip_code: yup
    .string()
    .required("Informe o CEP de onde o quarto está localizado.")
    .trim(),
  street: yup
    .string()
    .required("Informe a rua de onde o quarto está localizado.")
    .trim(),
  district: yup
    .string()
    .required("Informe o bairro de onde o quarto está localizado.")
    .trim(),
  city: yup
    .string()
    .required("Informe a cidade de onde o quarto está localizado.")
    .trim(),
  state: yup
    .string()
    .required("Informe o estado de onde o quarto está localizado.")
    .trim(),
  number: yup
    .string()
    .required("Informe o número de onde o quarto está localizado.")
    .trim(),
  room_photo: yup.string().required("Informe a URL da foto.").trim(),
  contact: yup.string().required("Informe um celular de contato.").trim(),
});
