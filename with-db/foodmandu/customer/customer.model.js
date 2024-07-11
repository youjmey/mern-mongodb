import mongoose, { mongo, Schema } from "mongoose";

// set rule/schema

const customerSchema = new mongoose.Schema({
  email: String,
  phoneNumber: String,
  address: String,
});

// create table/model/collection

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
