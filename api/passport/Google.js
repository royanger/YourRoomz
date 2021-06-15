import GoogleStrategy from 'passport-google-oauth20'
import dotenv from 'dotenv'
import { context } from '../schema/context.js'

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
        // does the user exists?
        const user = await context.prisma.user.findUnique({
          where: {
            email: profile.emails[0].value,
          },
        })

        // if not, then add the user
        if (!user) {
          await context.prisma.user.create({
            data: {
              givenName: profile.name.givenName,
              familyName: profile.name.familyName,
              email: profile.emails[0].value,
              googleId: profile.id,
            },
          })
        }

        // TODO Update givenName, familyName?? Probably not needed.

        cb(null, profile)
      }
    )
  )
}

export default passportGoogle
