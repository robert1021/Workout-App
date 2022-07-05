import express from 'express'
const router = express.Router()
// const AuthController = require('../controllers/AuthController')
// const authorization = require('../middleware/authorization')
const passport = require('passport')


function isLoggedIn(req, res, next) {
    // res.send(req.user)
    req.user ? next() : res.status(401).send("No")
}

router.get('/', (req, res) => {
    res.send('<a href="/auth/google"> Authenticate with Google</a>')
})

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/auth/loggedIn',
    failureRedirect: '/auth/failure'
}))

router.get('/loggedIn', isLoggedIn, (req, res) => {
    res.send("Logged in")
    // res.send(`Hello ${req.user.displayName}`)
    
})

router.get('/failure', (req, res) => [
    res.send('Failed to login')
])

router.get('/logout', (req, res) => {
    // req.logout()
    // req.session.destroy()
    res.send('Goodbye!')
})

// router.post('/register', AuthController.register)

// router.post('/login', AuthController.login)



export default router