import fetchData from './fetchData'

export async function createFurniture({
  roomId,
  color,
  categoryId,
  materialId,
  styleId,
}) {
  const data = await fetchData(
    `mutation createFurniture($roomId: String, $color: String,$categoryId: String, $materialId: String, $styleId: String) {
         createFurniture(
            roomId: $roomId,
            color: $color,
            categoryId: $categoryId,
            materialId: $materialId
            styleId: $styleId
      ) {
        id
        category {
           name
        }
      }
    }
    `,
    { variables: { roomId, color, categoryId, materialId, styleId } }
  )
  return data?.createFurniture
}

export async function deleteFurniture({ id }) {
  const data = await fetchData(
    `mutation deleteFurniture($id: String) {
      deleteFurniture(id: $id) {
         id
      }
   }
`,
    { variables: { id } }
  )
  return data?.deleteFurniture
}
