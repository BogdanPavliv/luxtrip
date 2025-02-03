import * as Yup from "yup";

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const name = Yup.string()
  .matches(regx.name, "Кирилиця латиниця від 2 до 20 символів")
  .required("Введіть ім'я");


const email = Yup.string()
  .matches(regx.email, "Формат example@mail.com")
  .required("Введіть email");

export const schemas = {
  custom: Yup.object().shape({
    name,
    email,
  }),
};

export const initialValues = {
  name: "",
  email: "",
};
