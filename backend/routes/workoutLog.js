const express = require('express')
const router = express.Router()
const WorkoutLogController = require('../controllers/WorkoutLogController')

router.post('/log', WorkoutLogController.logWorkout)

router.get('/etl', WorkoutLogController.addToDatabase)

router.get('/getNames', WorkoutLogController.getExerciseNames)

module.exports = router