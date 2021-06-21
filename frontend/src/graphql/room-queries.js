import gpl from 'graphql-tag'

export const ROOM_QUERY = gpl`
query {
   findRoomById(id: "c717aa08-e757-4f84-b166-9cfd47d58d50") {
     id
     name
     wallColor
     floorColor
     roomtype {
       id
       name
     }
     furniture {
       id
       color
       categoryId
     }
     user {
       id
       givenName
       familyName
       displayName
       email
     }
     flooring {
       id
       name
     }
     cartitems {
       id
       name
       price
       link
       cartId
     }
   }
 }
`