import gpl from 'graphql-tag'

export const CREATE_FURNITURE = gpl`
   mutation createFurniture($roomId: String, $color: String,$categoryId: String, $materialId: String, $styleId: String) {
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
 `

export const GET_CATEGORY_STYLES = gpl`
   query getCategoryStyles($categoryId: String) {
      getCategoryStyles(
         categoryId: $categoryId
      ) {
         id
         tag
         image
      }
   }
 `

export const DELETE_FURNITURE = gpl`
   mutation deleteFurniture($id: String) {
      deleteFurniture(id: $id) {
         id
      }
   }
`
