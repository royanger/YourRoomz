export const resolvers = {
  Query: {
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
    findRooms: (_parent, args, context) => {
      console.log('args', args.userId)
      return context.prisma.room.findMany({
        where: {
          userId: args.userId,
        },
      })
    },
    findRoomById: (_parent, args, context) => {
      return context.prisma.room.findUnique({
        where: {
          id: args.id,
        },
      })
    },
  },
  Room: {
    furniture: (parent, _args, context) => {
      return context.prisma.furniture.findMany({
        where: {
          id: parent.furnitureId,
        },
      })
    },
    user: (parent, _args, context) => {
      return context.prisma.user.findMany({
        where: {
          id: parent.userId,
        },
      })
    },
    flooring: (parent, _args, context) => {
      return context.prisma.flooring.findMany({
        where: {
          id: parent.floorMaterialId,
        },
      })
    },
    roomtype: (parent, _args, context) => {
      console.log('parent', context.prisma)
      return context.prisma.roomType.findMany({
        where: {
          id: parent.typeId,
        },
      })
    },
    cartitems: (parent, _args, context) => {
      console.log('parent', parent)
      return context.prisma.cartItems.findMany({
        where: {
          roomId: parent.id,
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
