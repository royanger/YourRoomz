import pkg from '@graphql-tools/schema'
const { makeExecutableSchema } = pkg

const typeDefs = `

  type User {
    id: ID
    givenName: String
    familyName: String
    email: String!
    googleId: String
    twitterId: String
    githubId: String
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
      # Find all suers
      findUsers: [User!]
      # Find a user by their email
      findUserByEmail(email: String): User
      # Get all rooms
      findRooms: Room
   }
   type Mutation {
      # Create a new user
      createUser(firstName: String, lastName: String, email: String!): User
      # Update a user
      updateUser( id: String, data: UpdateUserInput): User
   }

   input UpdateUserInput {
      givenName: String
      familyName: String
      displayName: String
      googleId: String
      twitterId: String
      githubId: String
   }
`

const resolvers = {
  Query: {
    findRooms: (parent, args, context) => {
      return context.prisma.room.findMany()
    },
    findUsers: (_parent, _args, context) => {
      return context.prisma.user.findMany()
    },
    findUserByEmail: (_parent, args, context) => {
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
    updateUser: (_parent, args, context) => {
      return context.prisma.user.update({
        where: { id: args.id },
        data: {
          givenName: args.data.givenName,
          familyName: args.data.familyName,
          displayName: args.data.displayName,
          googleId: args.data.googleId,
          twitterId: args.data.twitterId,
          githubId: args.data.githubId,
        },
      })
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
