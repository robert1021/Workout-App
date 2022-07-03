import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    userId: {
        type: String
    },
    dateStart: {
        type: Date
    },
    dateEnd: {
        type: Date
    }

}, {timestamps: true})

const Workout = mongoose.model('Workout', workoutSchema)

export default Workout