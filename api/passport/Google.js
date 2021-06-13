import GoogleStrategy, { Strategy } from 'passport-google-oauth20'
import dotenv from 'dotenv'

// import database object and models for sequelize
// import db from '../config/database.js';
// import User from '../models/User.js';

// import default settings

dotenv.config({ path: '../' })

const passportGoogle = async passport => {
  passport.use(
    new GoogleStrategy.Strategy(
      {
        clientID: process.env.GOOGLE_API_ID,
        clientSecret: process.env.GOOGLE_API_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, cb) => {
        // callback for successful authenication
        // recreate user in app DB here

        //   const user = await User.findOne({
        //     where: { email: profile.emails[0].value },
        //     raw: true,
        //   });
        //   if (!user) {
        //     const newUser = await User.create({
        //       firstname: profile.name.givenName,
        //       lastname: profile.name.familyName,
        //       email: profile.emails[0].value,
        //       googleId: profile.id,
        //     });
        //   }

        cb(null, profile)
      }
    )
  )
}

export default passportGoogle
