import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'
import ItemList from '../components/addFurniture/ItemList'
import Footer from '../components/footer/Footer'

const AddFurnitureList = () => {
  const history = useHistory()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  React.useEffect(() => {
    if (roomInfo && roomInfo.furniture.length > 0) {
      setNextDisabled(false)
    }
  }, [roomInfo])

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
