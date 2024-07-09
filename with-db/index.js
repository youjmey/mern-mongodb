import express from "express";
import connectDB from "./conect.db.js";
import Movie from "./movie.model.js";
const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// api
app.post("/movie/add", async (req, res) => {
  const newMovie = req.body;

  console.log(newMovie);
  await Movie.create(newMovie);

  return res.status(200).send("Adding movie");
});
// network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log("App listening on port");
});
