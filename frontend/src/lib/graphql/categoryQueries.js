import fetchData from './fetchData'

export async function getCategoryStyles(key) {
  const { categoryId } = key.queryKey[1]

  const data = await fetchData(
    `query getCategoryStyles($categoryId: String) {
       getCategoryStyles(
          categoryId: $categoryId
       ) {
          id
          tag
          image
       }
    }`,
    { variables: { categoryId } }
  )
  return data?.getCategoryStyles
}

export async function getFurnitureCategories(key) {
  const data = await fetchData(
    `query{
      getFurnitureCategories {
        id
        name
        image
        relatedMaterial {
          id
            material {
            id
            name
            image
          }
        }
      }
    }`,
    {}
  )
  return data?.getFurnitureCategories
}

export async function getFurnitureMaterialByCategory(key) {
  const { id } = key.queryKey[1]
  const data = await fetchData(
    `query{
      getFurnitureMaterialByCategory {
     id
     relatedMaterial {
       id
       material {
         id
         name
         image
       }
     }
   }
}`,
    { variables: { id } }
  )
  return data?.getFurnitureMaterialByCategory
}

export async function getFurnitureMaterial(key) {
  const data = await fetchData(
    `query {
      getFurnitureMaterial {
      id
      name
      image
      }
   }
`,
    {}
  )
  return data?.getFurnitureMaterial
}

export async function getRecommendedCategories(key) {
  const { roomId } = key.queryKey[1]

  const data = await fetchData(
    `query getRecommendedCategories($roomId: String) {
      getRecommendedCategories(roomId: $roomId) {
         id,
         roomId,
         categoryId
         category {
            id,
            name,
            rank
         }
      }
   }
`,
    { variables: { roomId } }
  )
  return data?.getRecommendedCategories
}

export async function deleteRecommendedCategory({ id }) {
  const data = await fetchData(
    `mutation deleteRecommendedCategory($id: String) {
      deleteRecommendedCategory(id: $id) {
         id
       }
   }
`,
    { variables: { id } }
  )
  return data?.deleteRecommendedCategory
}

export async function createRecommendedCategory({ roomId, categoryId }) {
  const data = await fetchData(
    `mutation createRecommendedCategory($roomId: String, $categoryId: String) {
      createRecommendedCategory(roomId: $roomId, categoryId: $categoryId) {
         id
       }
   }
`,
    { variables: { roomId, categoryId } }
  )
  return data?.createRecommendedCategory
}
