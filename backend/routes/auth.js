const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const authenticate = require('../middleware/authenticate')


router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.get('/', authenticate.authenticate, (req, res) => {
    res.send("Testing that this works")
})

module.exports = router