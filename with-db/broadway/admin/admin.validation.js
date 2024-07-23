import Yup from "yup";

export const registerAdminValidationSchema = Yup.object({
  email: Yup.string().trim().required().max(55).email().lowercase(),
  password: Yup.string().trim().required().min(4).max(20),
  firstName: Yup.string().trim().required().max(30).lowercase(),
  lastName: Yup.string().trim().required().max(30).lowercase(),
});
// export default registerAdminValidationSchema;

export const loginAdminValidationSchema = Yup.object({
  email: Yup.string().trim().email().required().lowercase(),
  password: Yup.string().required().trim(),
});

// export default loginAdminValidationSchema;
