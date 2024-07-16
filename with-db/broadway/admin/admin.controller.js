import express from "express";
import Yup from "yup";
import registerAdminValidationSchema from "./admin.validation.js";
import Admin from "./admin.model.js";
import bcrypt from "bcrypt";
import validateReqBody from "../middlewares/validation.middleware.js";

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

export default router;
