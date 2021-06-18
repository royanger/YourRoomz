import GitHubStrategy from 'passport-github2'
import dotenv from 'dotenv'
import { context } from '../schema/context.js'

dotenv.config({ path: '../' })

const passportGoogle = async passport => {
  passport.use(
    new GitHubStrategy.Strategy(
      {
        clientID: process.env.GITHUB_API_ID,
        clientSecret: process.env.GITHUB_API_SECRET,
        callbackURL: '/auth/github/callback',
      },
      async (accessToken, refreshToken, profile, cb) => {
        // does the user exists?
        console.log('github', profile.emails[0].value)
        const user = await context.prisma.user.findUnique({
          where: {
            email: profile.emails[0].value,
          },
        })

        console.log('user', user)
        // if not, then add the user
        if (!user) {
          console.log('adding user')
          await context.prisma.user.create({
            data: {
              displayName: profile.displayName,
              email: profile.emails[0].value,
              githubId: profile.id,
            },
          })
        }

        if (user && !user.githubId) {
          console.log('updating user')
          const updatedUser = await context.prisma.user.update({
            where: { id: user.id },
            data: {
              githubId: profile.id,
              displayName: profile.displayName,
            },
          })
          console.log('updated user', updatedUser)
        }

        return cb(null, user)
      }
    )
  )
}

export default passportGoogle
