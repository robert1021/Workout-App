const Exercise = require('../models/Exercise')
const axios = require('axios')
const Set = require('../models/Set')
const Workout = require('../models/Workout')


const logWorkout = async (req, res) => {
    const log = req.body.log
    try {
        log.forEach(set => {
            let doc= new Set({
                // workoutId: 1,
                 exercise: set.exercise,
                 setNum: set.set,
                 weight: set.weight,
                 reps: set.reps,
                 rpe: set.rpe
            })
            doc.save()
            // res.status(200).send("Saving successful")
        })
    } 
    catch {
        res.status(400).json("Not working")
    }
    
    res.status(200).send(log)
}   


const getExerciseNames = async(req, res) => {
    try {
        const exercises = await Exercise.find({}, {name:1})
        if(exercises) {
            res.status(200).json({
                exercises: exercises
            })
        }
    }
    catch {
        res.status(400).send('Query didnt works')
    }
    
}


const addToDatabase = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': '7fe38e28e6msh1c1b72b05b6465cp12e9abjsn85ebd2ed8262',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (res) {
        const arr = getUniqueListBy(res.data, 'name')
        arr.forEach(res => {
            let exercise = new Exercise({
                id: res.id,
                name: res.name,
                bodyPart: res.bodyPart,
                target: res.target,
                equipment: res.equipment,
                gifUrl: res.gifUrl
            })
            exercise.save()
          })
          
    }).catch(function (error) {
          console.error(error);
    });

    res.send("okay")
}

const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

module.exports = {
    addToDatabase,
    getExerciseNames,
    logWorkout
}
