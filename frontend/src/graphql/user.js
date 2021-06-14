import gpl from 'graphql-tag'

export const USERS_QUERY = gpl`
   query {
      findUser {
         id, firstName
      }
   }
`
