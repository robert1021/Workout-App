require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const profileRoute = require('./routes/profile')
const workoutRoute = require('./routes/workout')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/profile', profileRoute)
app.use('/workout', workoutRoute)

app.listen(4000, () => console.log('Server Started'))
