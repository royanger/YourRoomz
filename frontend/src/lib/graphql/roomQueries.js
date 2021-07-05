import fetchData from './fetchData'

export async function createRoom({
  userId,
  typeId,
  wallColor,
  floorColor,
  floorMaterialId,
}) {
  const data = await fetchData(
    `mutation createRoom($userId: String, $typeId: String, $wallColor: String, $floorColor: String, $floorMaterialId: String) {
      createRoom( userId: $userId, typeId: $typeId, wallColor: $wallColor, floorColor: $floorColor, floorMaterialId: $floorMaterialId) {
         id
         name
         wallColor
         floorColor
         roomtype {
            id
            name
         }

      }
   }
   `,
    { variables: { userId, typeId, wallColor, floorColor, floorMaterialId } }
  )
  return data?.createRoom
}

export async function updateRoom({
  id,
  typeId,
  wallColor,
  floorColor,
  floorMaterialId,
}) {
  const data = await fetchData(
    `mutation updateRoom( $id: String, $typeId: String, $wallColor: String, $floorColor: String, $floorMaterialId: String) {
         updateRoom( id: $id, typeId: $typeId, wallColor: $wallColor, floorColor: $floorColor, floorMaterialId: $floorMaterialId) {
           id
           name
           wallColor
           floorColor
           roomtype {
              id
              name
           }

         }
       }
      `,
    { variables: { id, typeId, wallColor, floorColor, floorMaterialId } }
  )
  return data?.updateRoom
}

export async function findRoomsByUser(key) {
  const { userId } = key.queryKey[1]

  const data = await fetchData(
    `query findRoomsByUser($userId: String!) {
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
   }`,
    { variables: { userId } }
  )
  return data?.findRoomsByUser
}

export async function findRoomById(key) {
  const { roomId } = key.queryKey[1]
  const data = await fetchData(
    `query findRoomById($roomId: String) {
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
                  rank
               }
               categoryStyles {
                  id
                  tag
               }

               material {
                  id
                  name
                  image
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
      `,

    { variables: { roomId } }
  )
  return data?.findRoomById
}

export async function getRoomTypes() {
  const data = await fetchData(
    `
      query {
         getRoomTypes {
            id
            name
            defaultImage
         }
      }
   `,
    { variables: {} }
  )
  return data?.getRoomTypes
}
