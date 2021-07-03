import * as React from 'react'
import Title from '../components/Title'
import { CATEGORY_QUERY } from '../lib/graphql/category'
import { graphqlClient } from '../lib/graphql'
import RecommendedItem from '../components/categories/RecommendedItem'
import Footer from '../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { useMutation, QueryClient } from 'react-query'
import {
  useRecommendedCategories,
  createRecommendedCategoryMutation,
  deleteRecommendedCategoryMutation,
} from '../lib/react-query/categoryQueries'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'

const CategoryRecommendations = () => {
  const history = useHistory()
  const queryClient = new QueryClient()
  const [categories, setCategories] = React.useState()
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const { roomInfo } = useSelector(roomSelector)
  const { data, error, isFetching } = useRecommendedCategories(roomInfo.id)

  React.useEffect(() => {
    graphqlClient
      .query({
        query: CATEGORY_QUERY,
      })
      .then(results => {
        setCategories(results.data.getFurnitureCategories)
      })
  }, [])

  React.useEffect(() => {
    if (selectedCategories) {
      setNextDisabled(false)
    }
  }, [selectedCategories])

  React.useEffect(() => {
    if (data) {
      setSelectedCategories(...data)
    }
  }, [data])

  const createRecommendedCategory = useMutation(
    createRecommendedCategoryMutation,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('rec-cats')
      },
    }
  )

  const deleteRecommendedCategory = useMutation(
    deleteRecommendedCategoryMutation,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('rec-cats')
      },
    }
  )

  const handleClick = id => {
    if (selectedCategories) {
      // remove from array
      const items = [...data]
      //items.splice(selectedCategories.indexOf(id), 1)
      setSelectedCategories(items)

      console.log('test')
      console.log(data)
      console.log(data?.indexOf(id))
      console.log(
        data.filter(function (item) {
          return item.categoryId === id
        })
      )
      // deleteRecommendedCategory.mutate({
      //    categoryId: id
      // })
    } else {
      // add category id to array
      setSelectedCategories(prevState => {
        return [...prevState, id]
      })
      createRecommendedCategory.mutate({
        roomId: roomInfo.id,
        categoryId: id,
      })
    }
  }

  const handleSave = e => {
    history.push('/recommendations')
  }

  return (
    <>
      <div className="container recommendations">
        <Title type="h1">What category of furniture should we recommend?</Title>

        <p>
          Select any furniture categories that you’re sure you want included in
          our recommendations.
        </p>

        <div className="grid">
          {categories?.map(category => {
            return (
              <RecommendedItem
                key={category.id}
                category={category}
                handleClick={handleClick}
                checked={true}
                selectedCategories={selectedCategories}
              />
            )
          })}
        </div>
      </div>

      <Footer
        callback={handleSave}
        nextDisabled={nextDisabled}
        prev="/add-furniture-list"
      />
    </>
  )
}

export default CategoryRecommendations
