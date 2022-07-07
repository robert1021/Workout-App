import dotenv from 'dotenv'
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
// const profileRoute = require('./routes/profile')
const workoutRoute = require('./routes/workoutLog')
const MongoStore = require('connect-mongo')
const cors = require('cors')

require('./passport')
const app = express()
app.use(cors())

app.use(session({
    secret: "cats", // TODO env variable
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE_URL
    })
}))

app.use(passport.initialize())
app.use(passport.session())

dotenv.config()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use('/auth', authRoute)
// app.use('/profile', profileRoute)
app.use('/workout', workoutRoute)


app.listen(4000, () => console.log('Server Started'))
