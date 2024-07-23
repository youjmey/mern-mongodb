import mongoose from "mongoose";

// // quantity schema
// const quantityDetail = new mongoose.Schema({
//   value: Number,
//   unit: String,
// });

//set schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

// create table
const Food = mongoose.model("Food", foodSchema);

export default Food;
