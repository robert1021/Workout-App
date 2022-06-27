const Exercise = require('../models/Exercise')
const axios = require('axios')

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
          //console.log(response.data);
          count = 0
          res.data.forEach(res => {
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

module.exports = {
    addToDatabase
}
