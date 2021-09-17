import { object, string, ref } from "yup";
const PASSWORD = {
  CONDITION:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  MSG: "passord must be a mininum of 8 characters long, must contain at least one lowercase, one uppercase, a number and a special character"
};

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string().required("Password is required").min(6, "Password is too short - should be 6 chars minimum").matches(PASSWORD.CONDITION, PASSWORD.MSG),
    passwordConfirmation: string().oneOf([ref("password"), null], "passwords must match"),
    email: string().email("Must be a valid email").required("Email is required")
  }),
});