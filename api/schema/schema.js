import pkg from '@graphql-tools/schema'
const { makeExecutableSchema } = pkg
import { typeDefs } from './typeDefs.js'
import { resolvers } from './resolvers.js'

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
