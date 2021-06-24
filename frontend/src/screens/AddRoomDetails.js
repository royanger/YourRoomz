import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../components/Title'
import RoomDetails from '../components/addRoom/RoomDetails'
import { useAuth } from '../lib/context/authContext'
import { useRoomContext } from '../lib/context/roomContext'
import Loader from 'react-ts-loaders'

const AddRoomDetails = () => {
  const history = useHistory()
  const {
    authInfo: { userId },
  } = useAuth()
  const { roomInfo } = useRoomContext()
  const [loading, setLoading] = React.useState(false)
  const [wallColor, setWallColor] = React.useState('#BA284E')
  const [floorColor, setFloorColor] = React.useState('#414367')
  const [wallColorUpdated, setWallColorUpdated] = React.useState(false)
  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  // if RoomContext has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setLoading(true)
      setWallColor(roomInfo.wallColor)
      setFloorColor(roomInfo.floorColor)
      setNextDisabled(false)
      setLoading(false)
    }
  }, [])

  const handleColorSelector = e => {
    const target = e.target.id.split('-').slice(0, 1).join('')
    if (target === 'wall')
      setWallColor(e.target.id.split('-').slice(1).join(''))
    if (target === 'floor')
      setFloorColor(e.target.id.split('-').slice(1).join(''))
    setWallColorUpdated(true)
  }

  const handleWallColorPicker = (color, e) => {
    setWallColor(color.hex)
    setWallColorUpdated(true)
  }

  const handleFloorColorPicker = (color, e) => {
    setFloorColor(color.hex)
    setWallColorUpdated(true)
  }

  return (
    <>
      <Title type="h1">Add Room Details</Title>
      <p>What is your wall and floor color?</p>

      <RoomDetails
      // callback={handleColorSelector}
      // handleWallColorPicker={handleWallColorPicker}
      // handleFloorColorPicker={handleFloorColorPicker}
      // wallColor={wallColor}
      // floorColor={floorColor}
      // typeName={typeName}
      />
    </>
  )
}

export default AddRoomDetails
