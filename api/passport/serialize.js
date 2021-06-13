const passportSerialize = passport => {
  passport.serializeUser((user, callback) => {
    callback(null, user.id)
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
