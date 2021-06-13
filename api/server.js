import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid'
import passport from 'passport'
import { context } from './schema/context.js'
import { schema } from './schema/schema.js'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

// import { PrismaClient } from '@prisma/client'

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  //const users = User.getUsers()
  //const matchingUser = users.find(user => user.id === id)
  //done(null, matchingUser)
})

dotenv.config()
const SECRET = process.env.SECRET

const server = express()
// const prisma = new PrismaClient()

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

server.use(passport.initialize())
server.use(passport.session())

const port = process.env.PORT ? process.env.PORT : 5000
const url = process.env.URL ? process.env.URL : 'localhost'

server.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
  console.log(`GRAPHQL: started on http://${url}:${port}/graphql`)
})
