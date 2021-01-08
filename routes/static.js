const router = require("express").Router();

router.route("/").get((req, res) => {
  console.log("App served.");
  res.render("index.html");
})

router.route("/*").get((req, res) => {
  res.render("index.html");
})

module.exports = router;
