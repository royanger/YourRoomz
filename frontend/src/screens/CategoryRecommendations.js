import * as React from 'react'
import Title from '../components/Title'
import RecommendedItem from '../components/categories/RecommendedItem'
import Footer from '../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { useMutation, useQueryClient, useQuery } from 'react-query'
import {
  getFurnitureCategories,
  createRecommendedCategory,
  deleteRecommendedCategory,
  getRecommendedCategories,
} from '../lib/graphql/categoryQueries'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'
import Loader from 'react-ts-loaders'

const CategoryRecommendations = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const { roomInfo } = useSelector(roomSelector)
  const selectedCategories = useQuery(
    ['selectedCategories', { roomId: roomInfo.id }],
    getRecommendedCategories
  )

  const categories = useQuery(['categories'], getFurnitureCategories)

  React.useEffect(() => {
    if (selectedCategories.data) {
      setNextDisabled(false)
    }
  }, [selectedCategories])

  const createRecommendedCategoryMutation = useMutation(
    createRecommendedCategory,
    {
      onMutate: async values => {
        await queryClient.cancelQueries([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])

        const previousRecommendedCats = queryClient.getQueryData([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])

        queryClient.setQueryData(
          ['selectedCategories', { roomId: roomInfo.id }],
          old => {
            if (old.length > 0) {
              return [...old, { ...values }]
            } else {
              return [{ ...values }]
            }
          }
        )
        return { previousRecommendedCats }
      },
      onSettled: () => {
        queryClient.invalidateQueries([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])
      },
    }
  )

  const deleteRecommendedCategoryMutation = useMutation(
    deleteRecommendedCategory,
    {
      onMutate: async values => {
        await queryClient.cancelQueries([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])

        const previousRecommendedCats = queryClient.getQueryData([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])

        queryClient.setQueryData(
          ['selectedCategories', { roomId: roomInfo.id }],
          old => {
            const filtered = old.filter(function (item) {
              return item.id !== values.id
            })
            return [...filtered]
          }
        )

        return { previousRecommendedCats }
      },
      onSettled: () => {
        queryClient.invalidateQueries([
          'selectedCategories',
          { roomId: roomInfo.id },
        ])
      },
    }
  )

  const handleClick = id => {
    const isSelected =
      selectedCategories.data.filter(function (item) {
        return item.categoryId === id
      }).length > 0

    if (isSelected) {
      // remove from array
      const selectedArray = selectedCategories.data.filter(function (item) {
        return item.categoryId === id
      })

      deleteRecommendedCategoryMutation.mutate({
        id: selectedArray[0].id,
      })
    } else {
      createRecommendedCategoryMutation.mutate({
        roomId: roomInfo.id,
        categoryId: id,
      })
    }
  }

  const handleSave = e => {
    history.push('/recommendations')
  }

  if (categories.isLoading || selectedCategories.isLoading) {
    return <Loader />
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
          {categories.data?.map(category => {
            return (
              <RecommendedItem
                key={category.id}
                category={category}
                handleClick={handleClick}
                checked={true}
                selectedCategories={selectedCategories.data}
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
