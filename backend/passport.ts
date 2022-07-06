import dotenv from 'dotenv'
dotenv.config()
const mongoose = require("mongoose")
const User = require('./models/User')
const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport = require('passport')

passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/auth/google/callback',
        passReqToCallBack: true
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User.findOne({googleId: profile.id})
            if(user) {
                done(null, user)
            } else {
                let newUser = new User({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                })
                await newUser.save()
                done(null, user)
            }
        }
        catch(err) {
            console.log(err)
        }
        
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
})
