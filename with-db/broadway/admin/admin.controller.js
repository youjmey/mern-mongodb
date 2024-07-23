import express from "express";
import Yup from "yup";
import {
  registerAdminValidationSchema,
  loginAdminValidationSchema,
} from "./admin.validation.js";
import Admin from "./admin.model.js";
import bcrypt from "bcrypt";
import validateReqBody from "../middlewares/validation.middleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();
//register admin
router.post(
  "/admin/register",
  validateReqBody(registerAdminValidationSchema),
  async (req, res) => {
    // extract new admin from req.body
    const newAdmin = req.body;

    // find user with provided email
    const admin = await Admin.findOne({ email: newAdmin.email });
    console.log(admin);

    // if admin exist,throw error
    if (admin) {
      return res.status(409).send({ message: "Admin already exists." });
    }
    // generate hashed passwrod
    const plainPassword = newAdmin.password;
    const saltRound = 10; // increases
    const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
    newAdmin.password = hashedPassword;
    await Admin.create(newAdmin);
    return res.status(200).send({ message: "Admin registered successfully." });
  }
);
// * login admin
router.get(
  "/admin/login",
  validateReqBody(loginAdminValidationSchema),
  async (req, res) => {
    // extract login credentials from req.body
    const loginCredentials = req.body;

    // find admin using email
    const admin = await Admin.findOne({ email: loginCredentials.email });

    // if mot admin found ,throw error
    if (!admin) {
      return res.status(404).send({ message: "Invalid credentials." });
    }
    // check for passwrod match
    const plainPassword = loginCredentials.password;
    const hashedPassword = admin.password;
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    // if not password match ,throw error
    if (!isPasswordMatch) {
      return res.status(404).send({ message: "Invalid credentials." });
    }
    // hide password
    admin.password = undefined;

    // generate access token
    const payload = { emial: admin.email };
    const sign = "asdsafsfa";
    const token = jwt.sign(payload, sign);
    console.log(payload);
    // send res
    return res
      .status(400)
      .send({ message: "success", adminDetails: admin, accessToken: token });
  }
);

export default router;
