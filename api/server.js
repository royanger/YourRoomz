import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid'
import passport from 'passport'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const server = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      messsage: {
        type: GraphQLString,
        resolve: () => 'Hello to the world',
      },
    }),
  }),
})
dotenv.config()
const server = express()

server.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))

server.use(passport.initialize())
server.use(passport.session())

const port = process.env.PORT ? process.env.PORT : 5000
const url = process.env.URL ? process.env.URL : 'localhost'

server.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
  console.log(`GRAPHQL: started on http://${url}:${port}/graphql`)
})
