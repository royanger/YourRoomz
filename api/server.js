import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid'
import passport from 'passport'
import { context } from './schema/context.js'
import { schema } from './schema/schema.js'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

// load vars from ENV variables
dotenv.config()
const SECRET = process.env.SECRET
const port = process.env.PORT ? process.env.PORT : 5000
const url = process.env.URL ? process.env.URL : 'localhost'

const server = express()

server.use(
  session({
    genid: req => uuidv4(),
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
)

server.use(
  '/graphql',
  graphqlHTTP({ schema: schema, context: context, graphiql: true })
)

// configure passport
server.use(passport.initialize())
server.use(passport.session())

import { passportSerialize, passportDeserialize } from './passport/serialize.js'
import passportGoogle from './passport/Google.js'
// import passportTwitter from './config/passportTwitter.js'
passportSerialize(passport)
passportDeserialize(passport)
passportGoogle(passport)
// passportTwitter(passport)

// Google Auth
server.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

server.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('Logged in via Google')
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000')
  }
)

server.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
  console.log(`GRAPHQL: started on http://${url}:${port}/graphql`)
})
