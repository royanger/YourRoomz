import * as React from 'react'
import { useHistory } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import Footer from '../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { roomSelector, updateRoomInfo } from '../lib/redux/roomSlice'

const AddRooms = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { roomInfo } = useSelector(roomSelector)
  const [type, setType] = React.useState('')
  const [typeName, setTypeName] = React.useState()
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const activeType = roomInfo ? roomInfo.roomtype.id : ''

  React.useEffect(() => {
    if (type) setNextDisabled(false)
  }, [type])

  const handleSave = async e => {
    e.preventDefault()
    if (roomInfo?.id) {
      dispatch(
        updateRoomInfo({
          ...roomInfo,
          roomtype: {
            id: type,
            name: typeName,
          },
        })
      )
      history.push('/add-room-details')
    } else {
      dispatch(updateRoomInfo({ roomtype: { id: type, name: typeName } }))
      history.push('/add-room-details')
    }
  }

  return (
    <>
      <div className="container room">
        <RoomGrid
          type={type || activeType}
          setType={setType}
          setTypeName={setTypeName}
        />
      </div>
      <Footer
        callback={handleSave}
        backVariant="hidden"
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddRooms
