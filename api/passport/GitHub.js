import GitHubStrategy from 'passport-github2'
import dotenv from 'dotenv'
import { context } from '../schema/context.js'

dotenv.config({ path: '../' })

const passportGoogle = async passport => {
  passport.use(
    //new GitHubStrategy(
    new GitHubStrategy.Strategy(
      {
        clientID: process.env.GITHUB_API_ID,
        clientSecret: process.env.GITHUB_API_SECRET,
        callbackURL: `${process.env.REACT_APP_API_URI}/auth/github/callback`,
      },
      async function (accessToken, refreshToken, profile, done) {
        // does the user exists?
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
              githubId: profile.id,
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

        if (user && !user.githubId) {
          await context.prisma.user.update({
            where: { id: user.id },
            data: {
              githubId: profile.id,
              displayName: profile.displayName,
            },
          })
        }

        const updatedUser = await context.prisma.user.findUnique({
          where: {
            email: profile.emails[0].value,
          },
        })

        const updatedProfile = {
          ...updatedUser,
          provider: 'github',
        }

        return done(null, updatedProfile)
      }
    )
  )
}

export default passportGoogle
