import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'
// import { QueryClient } from 'react-query'
import { useRoomById } from '../lib/react-query/roomQueries'
import ItemList from '../components/addFurniture/ItemList'
import Footer from '../components/footer/Footer'
import Loader from 'react-ts-loaders'

const AddFurnitureList = () => {
  const history = useHistory()
  //   const queryClient = new QueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const { data, error, isFetching } = useRoomById(roomInfo.id)

  React.useEffect(() => {
    if (roomInfo && roomInfo.furniture.length > 0) {
      setNextDisabled(false)
    }
  }, [roomInfo])

  const callback = () => {
    history.push('/category-recommendations')
  }

  if (isFetching) return <Loader />

  if (error) return 'There was was error loading your furniture list'

  return (
    <>
      <ItemList furniture={data.furniture} />

      <Footer
        nextDisabled={nextDisabled}
        callback={callback}
        furnitureList={true}
      />
    </>
  )
}

export default AddFurnitureList
