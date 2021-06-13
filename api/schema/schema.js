import { context } from './context.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = `
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    googleID: String
    twitterID: String
  }

  type Link {
     id: ID
     createdAt: String
     description: String
     url: String
  }

  type Room {
     id: ID
     name: String
     length: Int
     width: Int
   }


   type Query {
      findUser: [User!]
      getRoom: Room
      getLink: [Link!]
   }
   type Mutation {
     createUser(firstName: String, lastName: String, email: String!): User
   }
`

const resolvers = {
  Query: {
    findUser: (parent, args, context) => {
      return context.prisma.user.findMany()
    },
    getLink: (parent, args, context) => {
      return context.prisma.link.findMany()
    },
  },
  Mutation: {
    createUser: (_parent, args, context) => {
      return context.prisma.user.create({
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        },
      })
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
