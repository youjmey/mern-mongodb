import mongoose from "mongoose";
const dbUserName = "kec";
const dbPassword = encodeURIComponent("kec1234");
const dbHost = "cluster0.bjeaq6c.mongodb.net";
const dbName = "kec-b4-netflix";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gurungrajan709:5HtVVxXyU87EdIHx@cluster0.bjeaq6c.mongodb.net/kec-b4-netflix?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connection  established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
