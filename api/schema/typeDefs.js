export const typeDefs = `

  type User {
      id: ID
      givenName: String
      familyName: String
      displayName: String
      createdAt: String
      email: String!
      googleId: String
      twitterId: String
      githubId: String
  }

  type Room {
      id: ID
      userId: String!
      typeId: String!
      name: String
      createdAt: String
      wallColor: String
      floorColor: String
      floorMaterialId: String!
      furniture: [Furniture]
      user: [User]
      type: [RoomType]
      cartitems: [CartItems]
      roomtype: [RoomType]
   }

   type RoomType {
      id: String
      name: String
      active: Boolean
      defaultImage: String
   }

   type Furniture {
      id: String
      color: String
      roomId: String
      categoryId: String
      category: [Category]
      MaterialId: String
      material: [FurnitureMaterial]
      CategoryStyleId: String
      categoryStyles: [CategoryStyles]
   }

   type FurnitureMaterial {
      id: String
      name: String
      image: String
      relatedMaterial: [RelatedMaterial]
   }

   type RelatedMaterial {
      id: String
      categoryId: String
      category: [Category]
      materialId: String
      material: [FurnitureMaterial]
   }

   type Category {
      id: String
      name: String
      image: String
      rank: Float
      relatedMaterial: [RelatedMaterial]
   }

   type RecommendedCategories {
      id: String
      roomId: String
      room: [Room]
      categoryId: String
      category: [Category]
   }

   type CategoryStyles {
      id: String
      categoryId: String
      category: [Category]
      tag: String
      image: String
   }

   type Cart {
      id: String
      userId: String
      user: [User]
      cartItems: [CartItems]
   }

   type CartItems {
      id: String
      cartId: String
      cart: [Cart]
      name: String
      price: Float
      rating: Float
      rating_total: Float
      link: String
      image: String
   }

   type Query {
      # Find all users
      findUsers: [User!]
      # Find a user by their email
      findUserByEmail(email: String): User
      # Get all rooms by userId
      # findRooms(userId: String): Room
      findRoomsByUser(userId: String): [Room!]
      # Get a specific room and its related info
      findRoomById(id: String): Room
      # Get Room Types
      getRoomTypes: [RoomType!]
      # Get Furniture categories
      getFurnitureCategories: [Category]
      # Get Furniture Material
      getFurnitureMaterial: [FurnitureMaterial]
      # Get Furniture Material by Category
      getFurnitureMaterialByCategory(id: String): [Category]
      # Get Category Styles
      getCategoryStyles(categoryId: String): [CategoryStyles]
      # Get a all records for recommended Categories
      getRecommendedCategories(roomId: String): [RecommendedCategories]
      # Get any carts for a user
      getCart(userId: String): Cart

   }

   type Mutation {
      # Create a new user
      createUser(firstName: String, lastName: String, email: String!): User
      # Update a user
      updateUser( id: String, data: UpdateUserInput): User
      # Add a new room
      createRoom(userId: String, typeId: String, wallColor: String, floorColor:  String): Room
      # Update an existing room
      updateRoom(id: String, typeId: String, wallColor: String, floorColor: String): Room
      # Create a new user furniture item, linked to an existing room
      createFurniture(roomId: String, color: String, categoryId: String, materialId: String, styleId: String ): Furniture
      # Delete a furniture item
      deleteFurniture( id: String): Furniture
      # Create a link between a room and a category, for getting recommendations
      createRecommendedCategory(roomId: String, categoryId: String): RecommendedCategories
      # Delete a recommended category
      deleteRecommendedCategory(id: String): RecommendedCategories
      # Create Cart item
      createCartItem(cartId: String, name: String, price: Float, rating: Float, rating_total: Float, link: String, image: String, roomId: String): CartItems
      # Delete an item from its carts
      deleteCartItem(id: String): CartItems
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
