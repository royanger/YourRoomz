const { ApolloServer } = require('apollo-server')

/**
 * Setup up access to Postgres DB
 */
const typeDefs = `
 type Query {
   info: String!
 }
`

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// TODO Handle using .env rather than hard coded values
server.listen(5000)

console.log('Graphql API starting on http://localhost:5000')
