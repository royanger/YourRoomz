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
    findRoomsByUser: (_parent, args, context) => {
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
    getRoomTypes: (_parent, _args, context) => {
      return context.prisma.roomType.findMany()
    },
  },
  Room: {
    furniture: (parent, _args, context) => {
      return context.prisma.furniture.findMany({
        where: {
          roomId: parent.id,
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
      return context.prisma.roomType.findMany({
        where: {
          id: parent.typeId,
        },
      })
    },
    cartitems: (parent, _args, context) => {
      return context.prisma.cartItems.findMany({
        where: {
          roomId: parent.id,
        },
      })
    },
  },
  Furniture: {
    category: (parent, _args, context) => {
      return context.prisma.category.findMany({
        where: {
          id: parent.categoryId,
        },
      })
    },
    material: (parent, _args, context) => {
      return context.prisma.category.findMany({
        where: {
          id: parent.materialId,
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
    createRoom: (_parent, args, context) => {
      return context.prisma.room.create({
        data: {
          userId: args.userId,
          typeId: args.typeId,
          wallColor: args.wallColor,
          floorColor: args.floorColor,
        },
      })
    },
  },
}
