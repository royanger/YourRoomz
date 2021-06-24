import * as React from 'react'
import { useHistory } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import Footer from '../components/footer/Footer'
import { CREATE_ROOM } from '../graphql/room-queries'
import { graphqlClient } from '../lib/graphql'
import { useAuth } from '../lib/context/authContext'
import { useRoomContext } from '../lib/context/roomContext'
import Loader from 'react-ts-loaders'

const AddRooms = () => {
  const history = useHistory()
  const {
    authInfo: { userId },
  } = useAuth()
  const { roomInfo } = useRoomContext()
  const [loading, setLoading] = React.useState(false)
  const [type, setType] = React.useState('')

  const [nextDisabled, setNextDisabled] = React.useState(true)

  React.useEffect(() => {
    if (type) setNextDisabled(false)
  }, [type])

  // if RoomContext has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setLoading(true)
      setType(roomInfo.roomtype[0].id)
      setNextDisabled(false)
      setLoading(false)
    }
  }, [roomInfo])

  const handleSave = async e => {
    e.preventDefault()
    if (roomInfo?.id) {
      console.log('room exists, need to update')
    } else {
      setLoading(true)
      graphqlClient
        .mutate({
          mutation: CREATE_ROOM,
          variables: {
            userId: userId,
            typeId: type,
            floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
          },
        })
        .then(results => {
          console.log('results', results.data)
          setLoading(false)
          history.push('/add-items')
        })
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
        <RoomGrid type={type} setType={setType} />
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
