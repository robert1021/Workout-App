const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/ProfileController')
const authorization = require('../middleware/authorization')

router.get('/', authorization.authorization, ProfileController.getData)

module.exports = router