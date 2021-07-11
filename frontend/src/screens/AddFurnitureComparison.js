import * as React from 'react'
import Footer from '../components/footer/Footer'
import Title from '../components/Title'
import { useHistory } from 'react-router-dom'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { getCategoryStyles } from '../lib/graphql/categoryQueries'
import { createFurniture } from '../lib/graphql/furnitureQueries'
import { roomSelector } from '../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import Loader from 'react-ts-loaders'
import SimilarItem from '../components/addFurniture/SimilarItem'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [selectedStyle, setSelectedStyle] = React.useState()

  const recommendedCategories = useQuery(
    ['rec-cats', { categoryId: roomInfo.newFurniture.categoryId }],
    getCategoryStyles
  )

  const createFurnitureMutation = useMutation(createFurniture, {
    onSuccess: () => {
      queryClient.invalidateQueries('styles')
      queryClient.invalidateQueries(['room', { roomId: roomInfo.id }])
      history.push('/add-furniture-list')
    },
  })

  const handleClick = id => {
    setSelectedStyle(id)
    setNextDisabled(false)
  }

  const handleSave = () => {
    createFurnitureMutation.mutate({
      roomId: roomInfo.id,
      color: roomInfo.newFurniture.color,
      materialId: roomInfo.newFurniture.materialId,
      categoryId: roomInfo.newFurniture.categoryId,
      styleId: selectedStyle,
    })
  }

  if (recommendedCategories.isLoading)
    return <Loader type="ellipsis" size={200} color="var(--brand-accent)" />

  return (
    <>
      <div className="container comparison">
        <div>
          <Title type="h1">Choose similar pre-existing items</Title>

          <p>
            Select the image that is most stylistically similar to your item
          </p>
          <p>(Color doesn't matter) </p>
        </div>

        <div className="comparisongrid">
          {recommendedCategories?.data?.map(style => {
            return (
              <SimilarItem
                key={style.id}
                categoryStyle={style}
                selectedStyle={selectedStyle}
                handleClick={handleClick}
              />
            )
          })}
        </div>

        <Footer
          callback={handleSave}
          nextDisabled={nextDisabled}
          prev="/add-furniture-details"
        />
      </div>
    </>
  )
}

export default AddFurnitureDetails
