const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  judulVideo: { required: true, type: String },
  linkyt: { required: true, type: String },
  img: { required: true, type: String },
  productId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("videos", videoSchema);
