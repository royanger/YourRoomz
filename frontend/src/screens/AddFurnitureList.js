import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useRoomContext } from '../lib/context/roomContext'
import ItemList from '../components/addFurniture/ItemList'
import Footer from '../components/footer/Footer'

const AddFurnitureList = () => {
  const history = useHistory()
  const { roomInfo, refetch } = useRoomContext()
  const [nextDisabled, setNextDisabled] = React.useState(true)

  React.useEffect(() => {
    refetch()
  })

  React.useEffect(() => {
    if (roomInfo && roomInfo.furniture.length > 0) {
      setNextDisabled(false)
    }
  }, [])

  const callback = () => {
    history.push('/category-recommendations')
  }

  return (
    <>
      <ItemList />

      <Footer nextDisabled={nextDisabled} callback={callback} />
    </>
  )
}

export default AddFurnitureList
