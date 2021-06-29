import gpl from 'graphql-tag'

export const USERS_QUERY = gpl`
   query {
      findUsers {
         id, firstName, lastName, email
      }
   }
`
