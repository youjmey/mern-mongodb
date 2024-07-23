import express from "express";
import Customer from "./customer.model.js";
import mongoose from "mongoose";

const router = express.Router();

//? add customer
router.post("/customer/add", async (req, res) => {
  // extract new customer from req.body
  const newCustomer = req.body;

  // insert customer
  await Customer.create(newCustomer);

  //send res
  return res.status(201).send({ message: "customer is added succesfully" });
});

//? get customer list
router.get("/customer/list", async (req, res) => {
  const customers = await Customer.find();
  return res.status(200).send({ message: "Success", customerList: customers });
});

//? get customer detail by id
router.get("/customer/detail/:id", async (req, res) => {
  //extract customer id from req.params
  const customerId = req.params.id;

  // check for mongo id validity
  const isValid = mongoose.isValidObjectId(customerId);

  //if not valid mongo id,throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid mongo id ." });
  }

  // find customer using customerId
  const customer = await Customer.findOne({ _id: customerId });

  //if not customer,throw error
  if (!customer) {
    return res.status(400).send({ message: "Customer does not exist." });
  }
  //send res
  return res
    .status(200)
    .send({ message: "Success", customerDetails: customer });
});

// delete a customer by id
router.delete("/customer/delete/:id", async (req, res) => {
  // extract customer id from req.params
  const customerId = req.params.id;

  // check for mongo id validity
  const isValid = mongoose.isValidObjectId(customerId);

  // if not valid mongo id, throw error
  if (!isValid) {
    return res.status(200).send({ message: "invalid id" });
  }

  // find customer using customer id
  const customer = await Customer.findById(customerId);

  // if not customer, throw error
  if (!customer) {
    return res.status(400).send({ message: "Customer does not exist." });
  }

  // delete customer
  await customer.deleteOne({ _id: customerId });

  // send res
  return res.status(404).send({ message: "Deleting...." });
});

// ? edit customer by id

router.put("/customer/edit/:id", async (req, res) => {
  // extract customer id from req.params
  const customerId = req.params.id;

  // check for mongo id validity
  mongoose.isValidId = mongoose.isValidObjectId(customerId);

  // if not valid mongo id, throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid mongo id" });
  }

  // find customer
  const customer = await Customer.findOne({ _id: customerId });

  // if not customer, throw error
  if (!customerId) {
    return res.status(404).send({ message: "customer doesnot exist." });
  }

  // extract new values from req.body
  const newvalues = req.body;

  // update customer
  // await Customer.updateOne(
  //   { _id: customerId },
  //   {
  //     $set: {
  //       ...newvalues,
  //     },
  //   }
  // );

  // or
  await Customer.findByIdAndUpdate(customerId, { ...newvalues });

  // send res
  return res.status(200).send({ message: "customer is updated sucessfully " });
});

export default router;
