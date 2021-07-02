import gpl from 'graphql-tag'

export const CATEGORY_QUERY = gpl`
   query {
      getFurnitureCategories {
         id
         name
         image
      }
   }
`

export const MATERIAL_QUERY = gpl`
   query {
      getFurnitureMaterial {
      id
      name
      image
      }
   }
`

export const RECOMMENDED_CATEGORIES_BY_ROOM = gpl`
   query getRecommendedCategories($roomId: String) {
      getRecommendedCategories(roomId: $roomId) {
         id,
         roomId,
         categoryId
      }
   }

`

export const DELETE_RECOMMENDED_CATEGORY = gpl`
   mutation deleteRecommendedCategory($id: String) {
      deleteRecommendedCategory(id: $id) {
         id
       }
   }
`

export const CREATE_RECOMMENDED_CATEGORY = gpl`
   mutation createRecommendedCategory($roomId: String, $categoryId: String) {
      createRecommendedCategory(roomId: $roomId, categoryId: $categoryId) {
         id
       }
   }
`
