// import { context } from './context.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = `
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String!
    googleId: String
    twitterId: String
    facebookId: String
  }

  type Room {
     id: ID
     userId: String
     typeId: String
     name: String
     length: Int
     width: Int
   }

   type RoomType {
      id: String
      name: String
   }

   type Query {
      findUsers: [User!]
      findUser(email: String): User
      getRoom: Room
   }
   type Mutation {
     createUser(firstName: String, lastName: String, email: String!): User
   }
`

const resolvers = {
  Query: {
    findUsers: (parent, args, context) => {
      return context.prisma.user.findMany()
    },
    findUser: (parent, args, context) => {
      return context.prisma.user.findUnique({
        where: {
          email: args.email,
        },
      })
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
