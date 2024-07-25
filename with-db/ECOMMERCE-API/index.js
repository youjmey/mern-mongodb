import express from "express";
import connectDB from "./database-connection/db.connect.js";
import userRoutes from "./user/user.controller.js";
import productRoutes from "./product/product.controller.js";
import cartRoutes from "./cart/cart.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
await connectDB();

// register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

//todo :handle  global error

// network port and server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is listening to ${PORT} `);
});
