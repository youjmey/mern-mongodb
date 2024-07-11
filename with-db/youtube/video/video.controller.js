import express from "express";
import Video from "./video.model.js";
import mongoose from "mongoose";

const router = express.Router();

//add videos
router.post("/video/add", async (req, res) => {
  //extract new video from req.body
  const newVideo = req.body;

  // insert video
  await Video.create(newVideo);

  //send req
  return res.status(200).send({ message: "Added succesfully." });
});

// get video list
router.get("/video/list", async (req, res) => {
  const video = await Video.find();
  return res.status(200).send({ message: "Success", videoList: video });
});

// get video list by id
router.get("/video/detail/:id", async (req, res) => {
  // extract video id form req.params
  const videoId = req.params.id;

  // check for mongo id validity
  const isValid = mongoose.isValidObjectId(videoId);

  //if not valid mongo id ,throw error
  if (!isValid) {
    return res.status(400).send({ messsage: "invalid mongo  id " });
  }

  // find video uding videoId
  const video = await Video.findOne({ _id: videoId });

  //if not video ,throw error
  if (!video) {
    return res.status(400).send({ message: "Video does not exist " });
  }
  // send req
  return res.status(200).send({ message: "Success", videoDetails: video });
});

export default router;
