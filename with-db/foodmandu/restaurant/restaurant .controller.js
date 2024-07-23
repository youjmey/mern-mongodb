import express from "express";
import {
  addRestaurant,
  deleteRestaurant,
  validateMongoIdFromParams,
  validateRestaurantData,
} from "./restaurant.service.js";

const router = express.Router();

// * add restarant
router.post("/add", validateRestaurantData, addRestaurant);

// ?delete a restarant
router.delete("/delete/:id", validateMongoIdFromParams, deleteRestaurant);

export default router;
