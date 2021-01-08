const successJson = require("../util/json/success-json");
const errorJson = require("../util/json/error-json");
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(successJson(users)))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json(successJson(newUser)))
    .catch(err => {res.status(400).json(errorJson(err.kind));});
});

module.exports = router;
