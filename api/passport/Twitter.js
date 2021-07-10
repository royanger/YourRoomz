import TwitterStrategy from 'passport-twitter'
import dotenv from 'dotenv'
import { context } from '../schema/context.js'

dotenv.config({ path: '../' })

const passportTwitter = async passport => {
  passport.use(
    new TwitterStrategy.Strategy(
      {
        consumerKey: process.env.TWITTER_API_ID,
        consumerSecret: process.env.TWITTER_API_SECRET,
        userProfileURL:
          'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
        callbackURL: '/auth/twitter/callback',
        proxy: 'trustProxy',
      },
      async (accessToken, refreshToken, profile, callback) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email: profile.emails[0].value,
          },
        })

        // if not, then add the user
        if (!user) {
          const newUser = await context.prisma.user.create({
            data: {
              displayName: profile.displayName,
              email: profile.emails[0].value,
              twitterId: profile.id,
            },
          })
          await context.prisma.cart.create({
            data: {
              user: {
                connect: {
                  id: newUser.id,
                },
              },
            },
          })
        }

        if (user && !user.twitterId) {
          await context.prisma.user.update({
            where: { id: user.id },
            data: {
              twitterId: profile.id,
              displayName: profile.displayName,
            },
          })
        }
        callback(null, profile)
      }
    )
  )
}

export default passportTwitter
