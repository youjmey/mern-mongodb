import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://gurungrajan709:5HtVVxXyU87EdIHx@cluster0.bjeaq6c.mongodb.net/BROADWAY?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.log("DB connection failed....");
    console.log(error.message);
    process.exit();
  }
};
export default connectDB;
