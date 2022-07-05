import dotenv from 'dotenv'
const express = require('express')
const passport = require('passport')
const session = require('express-session')
import mongoose from 'mongoose'
import authRoute from './routes/auth'
import profileRoute from './routes/profile'
import workoutRoute from './routes/workoutLog'
require('./passport')
const cors = require('cors')


const app = express()
app.use(cors())

app.use(session({
    secret: "cats", // TODO env variable
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

dotenv.config()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401)
}

app.get('/auth', (req, res) => {
    res.send('<a href="/auth/google"> Authenticate with Google</a>')
})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    function(req, res) {
        res.redirect('/auth/loggedIn')
    }   
)
app.get('/auth/loggedIn', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`)
})

app.get('/auth/failure', (req, res) => [
    res.send('Failed to login')
])

app.get('/auth/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.send('Goodbye!')
})

app.use(express.json())
app.use('/auth', authRoute)
app.use('/profile', profileRoute)
app.use('/workout', workoutRoute)


app.listen(4000, () => console.log('Server Started'))
