import { useQuery, useQueryClient } from 'react-query'
import {
  RECOMMENDED_CATEGORIES_BY_ROOM,
  DELETE_RECOMMENDED_CATEGORY,
  CREATE_RECOMMENDED_CATEGORY,
} from '../graphql/category'
import { graphqlClient } from '../graphql'

const getRecommendedCategoriesByRoomQuery = async roomId => {
  const results = await graphqlClient.query({
    query: RECOMMENDED_CATEGORIES_BY_ROOM,
    variables: {
      roomId,
    },
  })
  return results.data.getRecommendedCategories
}

const createRecommendedCategoryMutation = async ({ roomId, categoryId }) => {
  const results = await graphqlClient.mutate({
    mutation: CREATE_RECOMMENDED_CATEGORY,
    variables: {
      roomId,
      categoryId,
    },
  })
  return results.data.createRecommendedCategory
}

const deleteRecommendedCategoryMutation = async ({ id }) => {
  const results = await graphqlClient.mutate({
    mutation: DELETE_RECOMMENDED_CATEGORY,
    variables: {
      id,
    },
  })
  return results.data.deleteRecommendedCategory
}

function useRecommendedCategories(roomId) {
  return useQuery(['rec-cats', roomId], () =>
    getRecommendedCategoriesByRoomQuery(roomId)
  )
}

export {
  useRecommendedCategories,
  createRecommendedCategoryMutation,
  deleteRecommendedCategoryMutation,
}
