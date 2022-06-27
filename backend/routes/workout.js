const express = require('express')
const router = express.Router()
const WorkoutController = require('../controllers/WorkoutController')

router.get('/etl', WorkoutController.addToDatabase)

module.exports = router