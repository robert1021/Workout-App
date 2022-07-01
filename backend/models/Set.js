const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setSchema = new Schema({
    workoutId: {
        type: Schema.Types.ObjectId, ref: 'Workout'
    },
    exerciseId: {
        type: Schema.Types.ObjectId, ref: 'Exercise'
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