export const typeDefs = `

  type User {
      id: ID
      givenName: String
      familyName: String
      displayName: String
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
      wallColor: String
      floorColor: String
      floorMaterialId: String!
      furniture: [Furniture]
      user: [User]
      type: [RoomType]
      flooring: [Flooring]
      cartitems: [CartItems]
      roomtype: [RoomType]
   }

   type RoomType {
      id: String
      name: String
      defaultImage: String
   }

   type Flooring {
      id: String
      name: String
      rooms: [Room]
   }

   type Furniture {
      id: String
      color: String
      roomId: String
      categoryId: String
      category: [Category]
      MaterialId: String
      material: [FurnitureMaterial]
   }

   type FurnitureMaterial {
      id: String
      name: String
   }

   type Category {
      id: String
      name: String
      imagE: String
   }

   type Cart {
      id: String
      userId: String
   }

   type CartItems {
      id: String
      cartId: String
      name: String
      price: Float
      link: String
      roomId: String
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

   }

   type Mutation {
      # Create a new user
      createUser(firstName: String, lastName: String, email: String!): User
      # Update a user
      updateUser( id: String, data: UpdateUserInput): User
      # Add a new room
      createRoom(userId: String, typeId: String, wallColor: String, floorColor:  String, floorMaterialId: String): Room
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
