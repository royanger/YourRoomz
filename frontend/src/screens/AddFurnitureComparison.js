import * as React from 'react'
import ItemComparison from '../components/addFurniture/ItemComparison'
import Footer from '../components/footer/Footer'
import Title from '../components/Title'
import { useHistory } from 'react-router-dom'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { getCategoryStyles } from '../lib/graphql/categoryQueries'
import { createFurniture } from '../lib/graphql/furnitureQueries'
import { roomSelector } from '../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import Loader from 'react-ts-loaders'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [selectedStyle, setSelectedStyle] = React.useState()

  const recommendedCategorioes = useQuery(
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

  const handleClick = e => {
    setSelectedStyle(e.target.id)
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

  if (recommendedCategorioes.isLoading) return <Loader />

  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Choose similar pre-existing items</Title>

          <p>Choose the item that looks similar to what you have.</p>
        </div>
        <ItemComparison
          handleClick={handleClick}
          styles={recommendedCategorioes.data}
        />

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
