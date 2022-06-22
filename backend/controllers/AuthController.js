const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const email = req.body.email
    const username = req.body.user
    const password = req.body.password

    const isUserPresent = await User.findOne({user: username})
        if(isUserPresent) {
            return res.status(400).send("Username already taken")
        }
    
    const isEmailPresent = await User.findOne({email: email})
        if(isEmailPresent) {
            return res.status(400).send("Email already taken")
        }

    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        let user = new User({
            email: email,
            user: username,
            password: hashedPassword
        })
        user.save()
        .then(() => {
            res.status(200).send("Registration Complete!")
        })
        .catch((e) => {
            res.status(400).send("Error with saving")
        })
    } 
    catch {
        res.status(400).send("Error processing credentials")
    }
}

module.exports = {
    register
}