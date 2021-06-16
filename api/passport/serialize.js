import { context } from '../schema/context.js'

const passportSerialize = passport => {
  passport.serializeUser((user, callback) => {
    if (user.provider === 'google') callback(null, user.emails[0].value)
    if (user.provider === 'twitter') callback(null, user.emails[0].value)
    //callback(null, user.id)
  })
}

const passportDeserialize = passport => {
  passport.deserializeUser(async (id, callback) => {
    const user = await context.prisma.user.findUnique({
      where: {
        email: id,
      },
    })
    if (user) {
      callback(null, user)
    } else {
      throw new Error('There was a problem deserializing the session')
    }
  })
}

export { passportSerialize, passportDeserialize }
