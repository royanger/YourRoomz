import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'
import { QueryClient, useMutation, useQuery } from 'react-query'
import { findRoomById } from '../lib/graphql/roomQueries'
import { deleteFurniture } from '../lib/graphql/furnitureQueries'
import ItemList from '../components/addFurniture/ItemList'
import Footer from '../components/footer/Footer'
import Loader from 'react-ts-loaders'

const AddFurnitureList = () => {
  const history = useHistory()
  const queryClient = new QueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const { data, isFetching, error } = useQuery(
    ['room-types', { roomId: roomInfo.id }],
    findRoomById
  )

  React.useEffect(() => {
    if (roomInfo && roomInfo.furniture.length > 0) {
      setNextDisabled(false)
    }
  }, [roomInfo])

  const deleteFurnitureMutation = useMutation(deleteFurniture, {
    onSuccess: () => {
      console.log('item deleted')
      queryClient.invalidateQueries('room')
    },
  })

  const callback = () => {
    history.push('/category-recommendations')
  }

  const handleDelete = id => {
    console.log('id', id)
    deleteFurnitureMutation.mutate({
      id: id,
    })
  }

  if (isFetching) return <Loader />
  if (error) return 'There was was error loading your furniture list'

  return (
    <>
      <ItemList furniture={data.furniture} handleDelete={handleDelete} />

      <Footer
        nextDisabled={nextDisabled}
        callback={callback}
        furnitureList={true}
      />
    </>
  )
}

export default AddFurnitureList
