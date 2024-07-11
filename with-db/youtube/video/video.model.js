import mongoose from "mongoose";

// set rule/schema
const videoSchema = new mongoose.Schema({
  title: String,
  creatorName: String,
  duration: Number,
  category: String,
});

// create table/model/collection
const Video = mongoose.model("Video", videoSchema);
export default Video;
