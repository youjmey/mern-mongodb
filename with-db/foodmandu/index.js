import express from "express";
import connectDB from "./connect.db.js";
import customerRoutes from "./customer/customer.controller.js";
import restaurantRoutes from "./restaurant/restaurant .controller.js";
import foodRoutes from "./food/food.controller.js";
const app = express();

// to make app understand json
app.use(express.json());

//database connection
connectDB();

// register routes
app.use(customerRoutes);
app.use(foodRoutes);
app.use(restaurantRoutes);

// network port and server
const PORT = 8005;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
