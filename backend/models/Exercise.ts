import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    id: String,
    name: String,
    bodyPart: String,
    target: String,
    equipment: String,
    gifUrl: String,
    
}, {timestamps: true})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise