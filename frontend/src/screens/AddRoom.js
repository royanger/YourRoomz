import * as React from 'react'
import { useHistory } from 'react-router-dom'
import RoomGrid from '../components/addRoom/RoomGrid'
import RoomDetails from '../components/addRoom/RoomDetails'
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
  const [step, setStep] = React.useState('one')
  const [type, setType] = React.useState('')
  const [typeName, setTypeName] = React.useState('')
  const [wallColor, setWallColor] = React.useState('#BA284E')
  const [floorColor, setFloorColor] = React.useState('#414367')
  const [wallColorUpdated, setWallColorUpdated] = React.useState(false)
  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  React.useEffect(() => {
    if (step === 'two' && type && wallColorUpdated) setNextDisabled(false)
  }, [step, type, wallColor, wallColorUpdated])

  // if RoomContext has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setLoading(true)
      setStep('two')
      setType(roomInfo.roomtype[0].id)
      setTypeName(roomInfo.roomtype[0].name)
      setWallColor(roomInfo.wallColor)
      setFloorColor(roomInfo.floorColor)
      setNextDisabled(false)
      setLoading(false)
    }
  }, [])

  const handleSelectType = e => {
    setType(e.target.id)
    setTypeName(e.target.innerText)
    setStep('two')
  }

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

  const handleSave = async e => {
    e.preventDefault()
    console.log('button pressed')
    console.log(e.target.id)

    setLoading(true)
    graphqlClient
      .mutate({
        mutation: CREATE_ROOM,
        variables: {
          userId,
          typeId: type,
          wallColor,
          floorColor,
        },
      })
      .then(results => {
        console.log('results', results.data)
      })
    setLoading(false)

    history.push('/add-items')
    console.log('SHOULD BE MOVED TO NEXT STEP')
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
        {step === 'one' ? <RoomGrid callback={handleSelectType} /> : ''}
        {step === 'two' ? (
          <RoomDetails
            callback={handleColorSelector}
            handleWallColorPicker={handleWallColorPicker}
            handleFloorColorPicker={handleFloorColorPicker}
            wallColor={wallColor}
            floorColor={floorColor}
            typeName={typeName}
          />
        ) : (
          ''
        )}
      </div>
      <Footer
        callback={handleSave}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddRooms
