const express = require('express')
const router = express.Router()
const passport = require('passport')
// const AuthController = require('../controllers/AuthController')
// const authorization = require('../middleware/authorization')

// router.post('/register', AuthController.register)

// router.post('/login', AuthController.login)


router.get('/', (req, res) => {
    res.send('<a href="/auth/google"> Authenticate with Google</a>')
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    function(req, res) {
        res.redirect('/auth/loggedIn')
    }   
)

router.get('/loggedIn', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`)
})

router.get('/failure', (req, res) => [
    res.send('Failed to login')
])

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) {
            console.log(err)
        }
        res.send("Goodbye!")
    })
    
})

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401)
}


module.exports = router