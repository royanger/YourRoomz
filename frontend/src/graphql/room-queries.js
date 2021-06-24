import gpl from 'graphql-tag'

export const CREATE_ROOM = gpl`

mutation createRoom($userId: String, $typeId: String, $wallColor: String, $floorColor: String, $floorMaterial: String) {
   createRoom( userId: $userId, typeId: $typeId, wallColor: $wallColor, floorColor: $floorColor, floorMaterialId: $floorMaterial) {
     id
   }
 }
`

export const ROOMS_QUERY = gpl`
query findRoomsByUser($userId: String!) {
   findRoomsByUser(userId: $userId) {
     id
     name
     wallColor
     floorColor
     roomtype {
       id
       name
     }
     cartitems {
       id
     }
     furniture {
       id
     }
   }
 }
`

export const ROOM_QUERY = gpl`
query findRoomById($roomId: String) {
   findRoomById(id: $roomId) {
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
       category {
          id
          name
       }

       material {
          id
          name
       }
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
