require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)

app.listen(4000, () => console.log('Server Started'))
