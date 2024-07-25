import Yup from "yup";
export const addCartItemValidationSchema = Yup.object({
  productId: Yup.string().required().trim(),
  orderedQuantity: Yup.number().required().min(1),
});
