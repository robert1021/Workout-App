import dotenv from 'dotenv'
const express = require('express')
const app = express()
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

app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/profile', profileRoute)
app.use('/workout', workoutRoute)

app.listen(4000, () => console.log('Server Started'))
