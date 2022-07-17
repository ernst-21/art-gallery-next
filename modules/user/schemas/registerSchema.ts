import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
    name: Yup.string().min(2).required("required"),
    email: Yup.string().email("validEmail").max(255).required("required"),

    password: Yup.string().min(6).required("required"),
});