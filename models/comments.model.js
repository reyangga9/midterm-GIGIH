const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: { required: true, type: String },
  comment: { required: true, type: String },
  timeStamp: { required: true, type: Date},
  videoId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("comments", commentSchema);
