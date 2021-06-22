import * as React from 'react'
import { Link } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import RoomDetails from '../components/addRoom/RoomDetails'

const AddRooms = () => {
  const [step, setStep] = React.useState('one')
  const [type, setType] = React.useState('')
  const [wallColor, setWallColor] = React.useState('#FE2712')
  const [floorColor, setFloorColor] = React.useState('')

  const handleSelectType = e => {
    setType(e.target.id)
    setStep('two')
  }

  const handleColorSelector = e => {
    setWallColor(e.target.id.split('-').slice(1).join(''))
  }

  const handleColorPicker = color => {
    console.log('test')
    setWallColor(color)
  }

  return (
    <>
      <div className="container room">
        {step === 'one' ? <RoomGrid callback={handleSelectType} /> : ''}
        {step === 'two' ? (
          <RoomDetails
            callback={handleColorSelector}
            handleColorPicker={handleColorPicker}
            wallColor={wallColor}
          />
        ) : (
          ''
        )}

        <Link to="/room-details">
          <button>Next</button>
        </Link>
      </div>
    </>
  )
}

export default AddRooms
