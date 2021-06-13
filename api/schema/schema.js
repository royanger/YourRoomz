import { context } from './context.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = `
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
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
      currentUser: User
      getRoom: Room
      getLink: [Link!]
   }
   type Mutation {
     createUser(firstName: String, lastName: String, email: String!): User
   }
`

const resolvers = {
  Query: {
    currentUser: (parent, args, context) => context.getUser(),
    getLink: (parent, args, context) => {
      return context.prisma.link.findMany()
    },
  },
  Mutation: {
    //   createUser: (parent, args, context) => context.createUser(),
    createUser: (_parent, args, context) => {
      console.log(context.prisma.user)
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
