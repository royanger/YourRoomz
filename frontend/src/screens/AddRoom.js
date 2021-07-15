import * as React from 'react'
import { useHistory } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import Footer from '../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { roomSelector, updateRoomInfo } from '../lib/redux/roomSlice'
import Title from '../components/Title'

const AddRooms = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { roomInfo } = useSelector(roomSelector)
  const [type, setType] = React.useState('')
  const [active, setActive] = React.useState(false)
  const [typeName, setTypeName] = React.useState()
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const activeType = roomInfo?.roomtype ? roomInfo.roomtype.id : ''

  React.useEffect(() => {
    if (roomInfo?.roomtype?.id) {
      setNextDisabled(false)
      setActive(true)
      setType(roomInfo.roomtype.id)
    }
  }, [roomInfo?.roomtype?.id])

  React.useEffect(() => {
    if (type && active === true) {
      setNextDisabled(false)
    } else {
      setNextDisabled(true)
    }
  }, [type, active])

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
        <Title type="h1">Which room are you designing?</Title>
        <p>Pick one room</p>
        <RoomGrid
          type={type || activeType}
          setType={setType}
          setTypeName={setTypeName}
          setActive={setActive}
        />
      </div>
      <Footer
        callback={handleSave}
        backVariant="hidden"
        nextDisabled={nextDisabled}
        prev="/profile"
      />
    </>
  )
}

export default AddRooms
