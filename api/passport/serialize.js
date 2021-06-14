const passportSerialize = passport => {
  passport.serializeUser((user, callback) => {
    if (user.provider === 'google') callback(null, user.emails[0].value)
    if (user.provider === 'twitter') callback(null, user.emails[0].value)
    //callback(null, user.id)
  })
}

const passportDeserialize = passport => {
  passport.deserializeUser((id, callback) => {
    //const users = User.getUsers()
    //const matchingUser = users.find(user => user.id === id)
    //done(null, matchingUser)
  })
}

export { passportSerialize, passportDeserialize }
