const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  store: { required: true, type: String },
  count: { required: true, type: Number },
  price: { required: true, type: Number },
  tags: { required: true, type: [String] },
  img: { required: true, type: String },
});

module.exports = mongoose.model("products", productsSchema);
