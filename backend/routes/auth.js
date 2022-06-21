const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')


router.post('/register', function(req, res){
    AuthController.register
})



module.exports = router