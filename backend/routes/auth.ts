import express from 'express'
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const authorization = require('../middleware/authorization')


router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.get('/', authorization.authorization, (req, res) => {
    return res.send()
})

export default router