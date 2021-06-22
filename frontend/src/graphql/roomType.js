import gpl from 'graphql-tag'

export const ROOM_TYPE_QUERY = gpl`
   query {
      getRoomTypes {
         id
         name
         defaultImage
      }
   }
`
