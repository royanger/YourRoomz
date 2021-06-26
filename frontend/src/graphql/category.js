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
