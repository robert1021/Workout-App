import dotenv from 'dotenv'
const express = require('express')
const app = express()
const passport = require('passport')
const cookieSession = require('cookie-session')
import passportSetup from './passport'
import mongoose from 'mongoose'
import authRoute from './routes/auth'
import profileRoute from './routes/profile'
import workoutRoute from './routes/workoutLog'
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(
    cookieSession({
        name:"session",
        keys: ["test"],
        maxAge: 24 * 60 * 60 * 100
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE"
}))

app.use(express.json())
app.use('/auth', authRoute)
app.use('/profile', profileRoute)
app.use('/workout', workoutRoute)

app.listen(4000, () => console.log('Server Started'))
