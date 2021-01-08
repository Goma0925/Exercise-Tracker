const successJson = require("../util/json/success-json");
const errorJson = require("../util/json/error-json");
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//Get all exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Add new exercise
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json(successJson(newExercise.toObject)))
  .catch(err => res.status(400).json(errorJson("Failed to add new exercise.")));
});

//Update by ID
router.route("/update/:id").post((request, response) => {
  Exercise.findById(request.params.id)
          .then(exercise => {
            exercise.username = request.body.username;
            exercise.description = request.body.description;
            exercise.duration = Number(request.body.duration);
            exercise.date = Date.parse(request.body.date);
            exercise.save()
              .then(() => response.json(successJson(exercise.toObject())))
              .catch(err => response.json(errorJson("Failed to update exercise.")));
          })
          .catch(err => response.status.json(errorJson()));
})

//Get by ID
router.route("/:id").get((request, response)=>{
  Exercise.findById(request.params.id)
          .then(exercise => {console.log("exercise", exercise);response.json(successJson(exercise.toObject()));})
          .catch(err => response.json(errorJson("Exercise not found.")));
});

//Delete by ID
router.route("/:id").delete((request, response)=>{
  Exercise.findByIdAndDelete(request.params.id)
          .then(exercise => response.json(successJson(exercise.toObject())))
          .catch(err => response.json(errorJson("Failed to delte the exercise.")));
})

module.exports = router;
