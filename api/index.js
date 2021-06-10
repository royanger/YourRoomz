const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

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

server.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))

// TODO Handle using .env rather than hard coded values
server.listen(5000)

console.log('Graphql API starting on http://localhost:5000')
