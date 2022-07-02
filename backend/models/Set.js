const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setSchema = new Schema({
    // workoutId: {
    //     type: Schema.Types.ObjectId, ref: 'Workout'
    // },
    exercise: {
        type: String //Schema.Types.ObjectId, ref: 'Exercise'
    },
    setNum: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    rpe: {
        type: Number
    }

}, {timestamsps: true})

const Set = mongoose.model('Set', setSchema)

module.exports = Set