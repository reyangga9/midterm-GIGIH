require("dotenv").config();
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

function connectDb() {
  mongoose.connect(mongoString);
  const database = mongoose.connection;
  // mengecek database connect atau tidak
  database.on("e", (e) => {
    console.log(e);
  });
  database.once("connected", () => {
    console.log("database Connected");
  });
}

module.exports = connectDb;
