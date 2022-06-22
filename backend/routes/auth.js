const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')


router.post('/register', AuthController.register)


router.get('/', (req, res) => {
    res.send("Testing that this works")
})

module.exports = router