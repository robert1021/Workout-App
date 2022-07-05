import dotenv from 'dotenv'
dotenv.config()
const passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy


passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/auth/google/callback',
        passReqToCallBack: true
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile)
    }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
