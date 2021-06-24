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
