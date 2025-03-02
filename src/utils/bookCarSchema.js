import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be at most 50 characters"),
  email: Yup.string().email("Invalid email format").required("Email is a required field"),
});
