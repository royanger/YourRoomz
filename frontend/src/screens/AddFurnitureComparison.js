import * as React from 'react'
import ItemComparison from '../components/addFurniture/ItemComparison'
import Footer from '../components/footer/Footer'
import Title from '../components/Title'
import { useHistory } from 'react-router-dom'
import { QueryClient, useMutation } from 'react-query'
import {
  createFurnitureMutation,
  useCategoryStyles,
} from '../lib/react-query/furnitureQueries'
import { roomSelector } from '../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import Loader from 'react-ts-loaders'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const queryClient = new QueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [selectedStyle, setSelectedStyle] = React.useState()
  const { data, error, isFetching } = useCategoryStyles(
    roomInfo.newFurniture.categoryId
  )

  const createFurniture = useMutation(createFurnitureMutation, {
    onSuccess: () => {
      console.log('FURNITURE ADDED')
      queryClient.invalidateQueries('styles')
      queryClient.invalidateQueries('room')
      history.push('/add-furniture-list')
    },
  })

  const handleClick = e => {
    setSelectedStyle(e.target.id)
    setNextDisabled(false)
  }

  const handleSave = () => {
    createFurniture.mutate({
      roomId: roomInfo.id,
      color: roomInfo.newFurniture.color,
      materialId: roomInfo.newFurniture.materialId,
      categoryId: roomInfo.newFurniture.categoryId,
      styleId: selectedStyle,
    })
  }

  if (isFetching) return <Loader />

  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Choose similar pre-existing items</Title>

          <p>Choose the item that looks similar to what you have.</p>
        </div>
        <ItemComparison handleClick={handleClick} styles={data} />

        <Footer callback={handleSave} nextDisabled={nextDisabled} />
      </div>
    </>
  )
}

export default AddFurnitureDetails
