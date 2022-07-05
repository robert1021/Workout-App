// import User from '../models/User'
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


// const register = async (req: any, res: any) => {
//     const email = req.body.email
//     const username = req.body.user
//     const password = req.body.password

//     const isUserPresent = await User.findOne({user: username})
//         if(isUserPresent) {
//             return res.status(400).send("Username already taken")
//         }
    
//     const isEmailPresent = await User.findOne({email: email})
//         if(isEmailPresent) {
//             return res.status(400).send("Email already taken")
//         }

//     try {
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(password, salt)

//         let user = new User({
//             email: email,
//             user: username,
//             password: hashedPassword
//         })
//         user.save()
//         .then(() => {
//             res.status(200).send("Registration Complete!")
//         })
//         .catch(() => {
//             res.status(400).send("Error with saving")
//         })
//     } 
//     catch {
//         res.status(400).send("Error processing credentials")
//     }
// }

// const login = async (req: any, res: any) => {
//     const emailOrUser = req.body.emailOrUser
//     const password = req.body.password

// const user = await User.findOne({$or: [{email: emailOrUser}, {user: emailOrUser}]})
//     if(user == null) {
//         return res.status(500).send("User not found")
//     }
//     try {
//         if(await bcrypt.compare(password, user.password)) {
//             let token = jwt.sign({user: user.user}, 'secretValue')

//             return res.status(200).json({
//                 message: "Login Successful!",
//                 token: token
//             })
//         } else {
//             return res.status(500).send("Wrong combination of username and password")
//         }

//     } catch {
//         return res.status(500).send()
//     }
// }

// module.exports = {
//     register,
//     login
// }