import * as React from 'react'
import { useHistory } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import Footer from '../components/footer/Footer'
import { CREATE_ROOM } from '../graphql/room-queries'
import { graphqlClient } from '../lib/graphql'
import { useAuth } from '../lib/context/authContext'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-ts-loaders'
import { roomSelector, updateRoomInfo } from '../lib/redux/roomSlice'

const AddRooms = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { roomInfo } = useSelector(roomSelector)

  const {
    authInfo: { userId },
  } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const [type, setType] = React.useState('')
  const [typeName, setTypeName] = React.useState()

  const [nextDisabled, setNextDisabled] = React.useState(true)

  React.useEffect(() => {
    if (type) setNextDisabled(false)
  }, [type])

  //if RoomContext has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setLoading(true)
      setType(roomInfo.roomtype.id)
      setNextDisabled(false)
      setLoading(false)
    }
  }, [roomInfo])

  const handleSave = async e => {
    e.preventDefault()
    if (roomInfo?.id) {
      console.log('room exists, need to update')
      console.log(roomInfo)
      const updatedRoomInfo = {
        id: type,
        name: typeName,
      }
      dispatch(
        updateRoomInfo({
          ...roomInfo,
          roomtype: {
            id: type,
            name: typeName,
          },
        })
      )
      // history.push('/add-room-details')
    } else {
      dispatch(updateRoomInfo({ roomtype: { id: type, name: typeName } }))
      //history.push('/add-room-details')
    }
  }

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  return (
    <>
      <div className="container room">
        <RoomGrid type={type} setType={setType} setTypeName={setTypeName} />
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
