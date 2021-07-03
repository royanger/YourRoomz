import * as React from 'react'
import Title from '../components/Title'
import RecommendedItem from '../components/categories/RecommendedItem'
import Footer from '../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { useMutation, QueryClient, useQuery } from 'react-query'
import {
  getFurnitureCategories,
  createRecommendedCategory,
  deleteRecommendedCategory,
  getRecommendedCategories,
} from '../lib/graphql/categoryQueries'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'

const CategoryRecommendations = () => {
  const history = useHistory()
  const queryClient = new QueryClient()
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const { roomInfo } = useSelector(roomSelector)
  const {
    data: recommendedCategories,
    isFetching: isFetchingRecommendedCats,
    error: errorRecommendedCats,
  } = useQuery(
    ['recommended-cats', { roomId: roomInfo.id }],
    getRecommendedCategories
  )

  const {
    data: categories,
    isFetching: isFetchingCats,
    error: errorCats,
  } = useQuery(['categories'], getFurnitureCategories)

  React.useEffect(() => {
    if (selectedCategories) {
      setNextDisabled(false)
    }
  }, [selectedCategories])

  React.useEffect(() => {
    if (recommendedCategories) {
      setSelectedCategories(...recommendedCategories)
    }
  }, [recommendedCategories])

  const createRecommendedCategoryMutation = useMutation(
    createRecommendedCategory,
    {
      onSuccess: () => {
        //   queryClient.invalidateQueries('rooms')
      },
    }
  )

  const deleteRecommendedCategoryMutation = useMutation(
    deleteRecommendedCategory,
    {
      onSuccess: () => {
        //   queryClient.invalidateQueries('rooms')
      },
    }
  )

  const handleClick = id => {
    if (selectedCategories) {
      // remove from array
      const items = [...recommendedCategories]
      //items.splice(selectedCategories.indexOf(id), 1)
      setSelectedCategories(items)

      console.log('test')
      console.log(recommendedCategories)
      console.log(recommendedCategories?.indexOf(id))
      console.log(
        recommendedCategories.filter(function (item) {
          return item.categoryId === id
        })
      )
      // deleteRecommendedCategoryMutation.mutate({
      //    categoryId: id
      // })
    } else {
      // add category id to array
      setSelectedCategories(prevState => {
        return [...prevState, id]
      })
      createRecommendedCategoryMutation.mutate({
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
