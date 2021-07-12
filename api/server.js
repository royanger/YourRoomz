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
import generateResults from './routes/generateResults.js'
// import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

// load vars from ENV variables
dotenv.config()
const SECRET = process.env.SECRET
const port = process.env.PORT ? process.env.PORT : 5000
const url = process.env.URL ? process.env.URL : 'localhost'

// initialize express server
const app = express()

app.use(
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

// app.use(cors())
app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
)

// configure passport
app.use(passport.initialize())
app.use(passport.session())

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

// configure GitHub Auth
import passportGitHub from './passport/GitHub.js'
passportGitHub(passport)

// import and mount routes
import { authCheck, authLogout } from './routes/auth.js'
app.get('/auth/authcheck', authCheck)
app.post('/auth/logout', authLogout)
app.use(
  '/graphql',
  graphqlHTTP({ schema: schema, context: context, graphiql: true })
)

// Google Auth
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${process.env.APP_URL}/profile`)
  }
)

// Twitter Auth
app.get('/auth/twitter', passport.authenticate('twitter'))
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${process.env.APP_URL}/profile`)
  }
)

// GitHub Auth
app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
)
app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${process.env.APP_URL}/profile`)
  }
)

app.get('/generateResults', generateResults)

// start the server
app.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
  console.log(`GRAPHQL: started on http://${url}:${port}/graphql`)
})
