import mongoose from "mongoose";

export const checkMongoIdValidity = (id) => mongoose.isValidObjectId(id);

export default checkMongoIdValidity;
