const typeDefs = `
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }
  type Query {
    currentUser: User
  }
  type Mutation {
    logout: Boolean
  }
`

export default typeDefs
