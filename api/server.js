import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'
import passport from 'passport'
import { context } from './schema/context.js'
import { schema } from './schema/schema.js'
import pkg from 'express-graphql'
const { graphqlHTTP } = pkg
// import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

// load vars from ENV variables
dotenv.config()
const SECRET = process.env.SECRET
const port = process.env.PORT ? process.env.PORT : 5000
const url = process.env.URL ? process.env.URL : 'localhost'

// initialize express server
const server = express()

server.use(
  session({
    genid: req => uuidv4(),
    name: 'rooms',
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      //  secure: true,
      //  sameSite: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    },
  })
)

server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

// configure passport
server.use(passport.initialize())
server.use(passport.session())

// setup serialize/deserialize for users
import { passportSerialize, passportDeserialize } from './passport/serialize.js'
passportSerialize(passport)
passportDeserialize(passport)

// configure Google Auth
import passportGoogle from './passport/Google.js'
passportGoogle(passport)

// configure Twitter Auth
import passportTwitter from './passport/Twitter.js'
passportTwitter(passport)

// import and mount routes
import { authCheck, authLogout } from './routes/auth.js'
server.get('/auth/authcheck', authCheck)
server.post('/auth/logout', authLogout)
server.use(
  '/graphql',
  graphqlHTTP({ schema: schema, context: context, graphiql: true })
)

// Google Auth
server.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
server.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/profile')
  }
)

// Twitter Auth
server.get('/auth/twitter', passport.authenticate('twitter'))
server.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/profile')
  }
)

// start the server
server.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
  console.log(`GRAPHQL: started on http://${url}:${port}/graphql`)
})
