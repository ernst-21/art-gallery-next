import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
    email: Yup.string().email("validEmail").max(255).required("required"),

    password: Yup.string().min(6).required("required"),
});