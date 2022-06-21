const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        let user = new User({
            email: req.body.email,
            user: req.body.user,
            password: hashedPassword
        })
        user.save()
        .then(() => {
            res.json({message: "User Added Succesfully!"})
        })
        .catch((e) => {
            res.jons({message: "Error with saving", error: e})
        })
    } 
    catch {
        res.send("Error processing credentials")
    }
    
    
}

module.exports = {
    register
}