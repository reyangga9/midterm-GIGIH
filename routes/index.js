var express = require("express");
const app = express();
var router = express.Router();
app.set("view engine", "ejs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", layout: "layouts/main-layouts" });
});

module.exports = router;
