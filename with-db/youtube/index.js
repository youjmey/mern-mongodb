import express from "express";
import connectDB from "./connect.db.js";
import videoRoutes from "./video/video.controller.js";
const app = express();

// to make app understand json
app.use(express.json());

//database connection
connectDB();

// register routes
app.use(videoRoutes);

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
