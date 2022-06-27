const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    bodyPart: {
        type: String
    },
    target: {
        type: String
    },
    equipment: {
        type: String
    },
    gifUrl: {
        type: String
    }
}, {timestamps: true})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise