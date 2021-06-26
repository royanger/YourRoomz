import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../components/Title'
import { useRoomContext } from '../lib/context/roomContext'
import Footer from '../components/footer/Footer'
import SelectColor from '../components/addFurniture/SelectColor'

const AddRoomDetails = () => {
  const history = useHistory()
  const { roomInfo } = useRoomContext()

  const [wallColor, setWallColor] = React.useState('')
  const [floorColor, setFloorColor] = React.useState('')
  const [typeName, setTypeName] = React.useState('')
  const [nextDisabled, setNextDisabled] = React.useState(true)

  // if RoomContext has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setWallColor(roomInfo?.wallColor)
      setFloorColor(roomInfo?.floorColor)
      setTypeName(roomInfo.roomtype[0].name)
      setNextDisabled(false)
    }
  }, [roomInfo])

  React.useEffect(() => {
    if (wallColor && floorColor) setNextDisabled(false)
  }, [wallColor, floorColor])

  const handleColorSelector = e => {
    const target = e.target.id.split('-').slice(0, 1).join('')
    if (target === 'wall')
      setWallColor(e.target.id.split('-').slice(1).join(''))
    if (target === 'floor')
      setFloorColor(e.target.id.split('-').slice(1).join(''))
  }

  const handleWallColorPicker = (color, e) => {
    setWallColor(color.hex)
  }

  const handleFloorColorPicker = (color, e) => {
    setFloorColor(color.hex)
  }

  const handleSave = () => {
    console.log('saving!')
    history.push('/add-furniture-details')
  }

  return (
    <>
      <div className="container room">
        <Title type="h1">
          {`What is your ${typeName ? typeName : 'room'} color?`}
        </Title>

        <p>{`Choose your ${
          typeName ? typeName : 'room'
        } wall color and floor color`}</p>
        <SelectColor
          callback={handleColorSelector}
          idPrefix="wall"
          handleColorPicker={handleWallColorPicker}
          color={wallColor}
        />
        <SelectColor
          callback={handleColorSelector}
          idPrefix="floor"
          handleColorPicker={handleFloorColorPicker}
          color={floorColor}
        />
      </div>
      <Footer
        callback={handleSave}
        nextDisabled={nextDisabled}
        prev="/add-room"
      />
    </>
  )
}

export default AddRoomDetails
