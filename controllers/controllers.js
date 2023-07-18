const Comment = require("../models/comments.model");
const Product = require("../models/products.model");
const Video = require("../models/video.model");

// mendapatkan semua video
const getVideoAll = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).render("videoPage", {
      layout: "layouts/main-layouts",
      products,
      title: "semua Video",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// mendapatkan satu video berdsarkan id
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findOne({
      productId: req.params.id,
    }).select("judulVideo linkYt img productId");
    const comments = await Comment.find({ videoId: req.params.id });
    res
      .status(200)
      // .json(video);
      .render("video", {
        layout: "layouts/main-layouts",
        video,
        comments,
        title: "video",
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const postCommentById = (req, res) => {
  const comment = new Comment({
    username: req.body.username,
    comment: req.body.comment,
    timeStamp: Date.now(),
    videoId: req.params.id,
  });
  try {
    const commentToSave = comment.save();
    res.status(200).json("Keren dah bisa");
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getVideoAll, getVideoById, postCommentById };
