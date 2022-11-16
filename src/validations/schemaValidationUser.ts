import * as yup from "yup";

export const schemaValidationUser = yup.object().shape({
  profile_photo: yup.string().required("Informe uma URL válida da sua foto."),
  description: yup
    .string()
    .required("Informe uma breve descrição sobre você.")
    .min(20, "A descrição deve ter no mínimo 20 caracteres."),
});
