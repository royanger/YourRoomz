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
      userId: String
      typeId: String
      name: String
      wallColor: String
      floorColor: String
      floorMaterialId: String
      furniture: [Furniture]
      user: [User]
      flooring: [Flooring]
      cartitems: [CartItems]
      roomtype: [RoomType]
   }

   type RoomType {
      id: String
      name: String
   }

   type Flooring {
      id: String
      name: String
      rooms: [Room]
   }
   type Furniture {
      id: String
      color: String
      categoryId: String
      roomId: String
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
      # Get all rooms
      # findRooms(userId: String): Room
      findRooms(userId: String): [Room!]
      # Get a specific room and its related info
      findRoomById(id: String): Room

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
