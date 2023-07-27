const express = require("express");
const app = express();
const videosRoute = require("./routes/videopage.route");
const indexRoute = require("./routes/index");
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
const bodyParser = require("body-parser");
const connectDb = require("./config/db");

// me parse body json
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// konek DB
connectDb();

// membuat layout untuk mempermudah ejs
app.use(expressLayouts);
// supaya bisa membaca file EJS didalam folder view
app.set("view engine", "ejs");
// Indexing Home
app.use("/", indexRoute);
// indexing Video
app.use("/videos", videosRoute);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
