import User from "./models/User"
import dotenv from 'dotenv'
dotenv.config()

const passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy


passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/auth/google/callback',
        passReqToCallBack: true,
        scope: ['email', 'profile']
    },
    function(request, accessToken, refreshToken, profile, done) {
        User.find({ googleId: profile.id }, function (err, user) {
            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

module.exports = passport