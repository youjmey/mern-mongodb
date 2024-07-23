import express from "express";
import { isSeller, isUser } from "../middleware/authentication.middleware.js";
import Product from "./product.model.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { addProductValidationSchema } from "./product.validation.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";
import checkMongoIdsEquality from "../utils/mongo.id.equality.js";

const router = express.Router();

// * list all products
router.get("/product/list", isUser, async (req, res) => {
  // find all products
  const products = await Product.find();

  // send res
  return res.status(200).send({ message: "success", productList: products });
});

// * add product
router.post(
  "/product/add",
  isSeller,
  validateReqBody(addProductValidationSchema),
  async (req, res) => {
    // extract new product from req.body
    const newProduct = req.body;

    newProduct.sellerId = req.loggedInUserId;

    // save product
    await Product.create(newProduct);

    // send res
    return res.status(201).send({ message: "Product is added successfully." });
  }
);

// * delete product
router.delete(
  "/product/delete/:id",
  isSeller,
  validateMongoIdFromParams,
  async (req, res) => {
    // extract product id from req.params
    const productId = req.params.id;
    // find product using productId
    const product = await Product.findById(productId);
    // if not product found, throw error
    if (!product) {
      return res.status(404).send({ message: "Product does not exist" });
    }
    // check if loggedInUserId is owner of the product
    const isProductOwner = checkMongoIdsEquality(
      // ! equivalent code
      product.sellerId,
      req.loggedInUserId
    );
    // if not owner, throw error
    if (!isProductOwner) {
      return res
        .status(403)
        .send({ message: "You are not the owner of this product." });
    }
    // delete product
    await Product.findByIdAndDelete(productId);
    // send res
    return res
      .status(200)
      .send({ message: "Product has been deleted successfully." });
  }
);

// * edit product
router.put(
  "/product/edit/:id",
  isSeller,
  validateMongoIdFromParams,
  validateReqBody(addProductValidationSchema),
  async (req, res) => {
    // extract productId from req.params
    const productId = req.params.id;
    // find product using productId
    const product = await Product.findById(productId);
    // if not product, throw error
    if (!product) {
      return res.status(404).send({ message: "Product does not exist." });
    }
    // check product ownership
    const isProductOwner = checkMongoIdsEquality(
      product.sellerId,
      req.loggedInUserId
    );
    // if not product owner , throw error
    if (!isProductOwner) {
      return res
        .status(403)
        .send({ message: "You are not owner of this product." });
    }
    // extract new values from req.body
    const newValues = req.body;
    // exit product
    await Product.updateOne({ _id: productId }, { $set: { ...newValues } });
    // send res
    return res.status(200).send("Product edited successfully .");
  }
);
export default router;
