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
        orderBy: {
          createdAt: 'asc',
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
      return context.prisma.roomType.findMany({
        orderBy: {
          active: 'desc',
        },
      })
    },
    getFurnitureCategories: (_parent, _args, context) => {
      return context.prisma.category.findMany({
        orderBy: {
          name: 'asc',
        },
      })
    },
    getFurnitureMaterial: (_parent, _args, context) => {
      return context.prisma.furnitureMaterial.findMany()
    },
    getFurnitureMaterialByCategory: (_parent, args, context) => {
      return context.prisma.category.findMany({
        where: {
          id: args.id,
        },
      })
    },
    getCategoryStyles: (_parent, args, context) => {
      return context.prisma.categoryStyles.findMany({
        where: {
          categoryId: args.categoryId,
        },
      })
    },
    getRecommendedCategories: (_parent, args, context) => {
      return context.prisma.recommendedCategories.findMany({
        where: {
          roomId: args.roomId,
        },
      })
    },
    getCart: (_parent, args, context) => {
      console.log(args)
      return context.prisma.cart.findUnique({
        where: {
          userId: args.userId,
        },
      })
    },
  },
  RecommendedCategories: {
    category: (parent, _args, context) => {
      return context.prisma.category.findMany({
        where: {
          id: parent.categoryId,
        },
      })
    },
  },
  Category: {
    relatedMaterial: (parent, _args, context) => {
      return context.prisma.relatedMaterial.findMany({
        where: {
          categoryId: parent.id,
        },
      })
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
    roomtype: (parent, _args, context) => {
      return context.prisma.roomType.findMany({
        where: {
          id: parent.typeId,
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
      return context.prisma.furnitureMaterial.findMany({
        where: {
          id: parent.MaterialId,
        },
      })
    },

    categoryStyles: (parent, _args, context) => {
      return context.prisma.categoryStyles.findMany({
        where: {
          id: parent.CategoryStyleId,
        },
      })
    },
  },
  RelatedMaterial: {
    material: (parent, _args, context) => {
      return context.prisma.furnitureMaterial.findMany({
        where: {
          id: parent.materialId,
        },
      })
    },
  },
  Cart: {
    cartItems: (parent, _args, context) => {
      console.log(parent)
      return context.prisma.cartItems.findMany({
        where: {
          cartId: parent.cartId,
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
          user: {
            connect: {
              id: args.userId,
            },
          },
          type: {
            connect: {
              id: args.typeId,
            },
          },
          wallColor: args.wallColor,
          floorColor: args.floorColor,
        },
      })
    },
    updateRoom: (_parent, args, context) => {
      return context.prisma.room.update({
        where: { id: args.id },
        data: {
          typeId: args.typeId,

          wallColor: args.wallColor,
          floorColor: args.floorColor,
        },
      })
    },
    createFurniture: (_parent, args, context) => {
      return context.prisma.furniture.create({
        data: {
          room: {
            connect: {
              id: args.roomId,
            },
          },
          color: args.color,
          category: {
            connect: {
              id: args.categoryId,
            },
          },
          material: {
            connect: {
              id: args.materialId,
            },
          },
          categorystyle: {
            connect: {
              id: args.styleId,
            },
          },
        },
      })
    },
    deleteFurniture: (_parent, args, context) => {
      return context.prisma.furniture.delete({
        where: {
          id: args.id,
        },
      })
    },
    createRecommendedCategory: (_parent, args, context) => {
      return context.prisma.recommendedCategories.create({
        data: {
          room: {
            connect: {
              id: args.roomId,
            },
          },
          category: {
            connect: {
              id: args.categoryId,
            },
          },
        },
      })
    },
    deleteRecommendedCategory: (_parent, args, context) => {
      return context.prisma.recommendedCategories.delete({
        where: {
          id: args.id,
        },
      })
    },
    createCartItem: (_args, args, context) => {
      return context.prisma.cartItems.create({
        data: {
          cart: {
            connect: {
              id: args.cartId,
            },
          },
          name: args.name,
          rating: args.rating,
          rating_total: args.rating_total,
          price: args.price,
          link: args.link,
          image: args.image,
        },
      })
    },
    deleteCartItem: (_parent, args, context) => {
      return context.prisma.cartItems.delete({
        where: {
          id: args.id,
        },
      })
    },
  },
}
