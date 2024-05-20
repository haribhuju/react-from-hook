import * as yup from "yup";

export const userFormValidation = yup.object({
  //username
  username: yup
    .string()
    .required("Username is required")
    .min(2, "Username should not be less than 2 characters")
    .max(8, "Username should not be longer than 8 characters"),

  //email
  email: yup.string().required("Email is required").email("Email is invalid"),

  //password
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not exceed 16 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).*$/,
      "Password must contain at least one number, one character, and one uppercase letter"
    ),

  //samepassword
  samepassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),

  //age
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),

  //gender
  gender: yup.string().required("Gender is required"),

  //country
  country: yup.string().required("Country is required"),

  //date
  date: yup
    .date()
    .required("Birth Date is required")
    .nullable()
    .typeError("Invalid date format"),

  //terms and condition
  termsandconditions: yup.bool().oneOf([true], "Accept Terms is required"),

  //comment
  comment: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
