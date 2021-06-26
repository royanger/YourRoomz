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
