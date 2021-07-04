import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQueryClient } from 'react-query'
import { createRoom, updateRoom } from '../lib/graphql/roomQueries'
import {
  roomSelector,
  updateWallColor,
  updateFloorColor,
} from '../lib/redux/roomSlice'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import SelectColor from '../components/addFurniture/SelectColor'

const AddRoomDetails = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { roomInfo } = useSelector(roomSelector)
  const { authInfo } = useAuth()
  const [wallColor, setWallColor] = React.useState('')
  const [floorColor, setFloorColor] = React.useState('')
  const [nextDisabled, setNextDisabled] = React.useState(true)

  // if Redux has stored room info, load that into state
  React.useEffect(() => {
    if (roomInfo) {
      setWallColor(roomInfo?.wallColor)
      setFloorColor(roomInfo?.floorColor)
      setNextDisabled(false)
    }
  }, [roomInfo])

  const createRoomMutation = useMutation(createRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms')
    },
  })

  const updateRoomMutation = useMutation(updateRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms')
    },
  })

  React.useEffect(() => {
    if (wallColor && floorColor) setNextDisabled(false)
  }, [wallColor, floorColor])

  const handleColorSelector = e => {
    const target = e.target.id.split('-').slice(0, 1).join('')
    if (target === 'wall') {
      setWallColor(e.target.id.split('-').slice(1).join(''))
      dispatch(updateWallColor(e.target.id.split('-').slice(1).join('')))
    }
    if (target === 'floor') {
      setFloorColor(e.target.id.split('-').slice(1).join(''))
      dispatch(updateFloorColor(e.target.id.split('-').slice(1).join('')))
    }
  }

  const handleWallColorPicker = (color, e) => {
    setWallColor(color.hex)
    dispatch(updateWallColor(color.hex))
  }

  const handleFloorColorPicker = (color, e) => {
    setFloorColor(color.hex)
    dispatch(updateFloorColor(color.hex))
  }

  const handleSave = async () => {
    if (roomInfo.id) {
      updateRoomMutation.mutate({
        id: roomInfo.id,
        typeId: roomInfo.roomtype.id,
        wallColor,
        floorColor,
      })
    } else {
      createRoomMutation.mutate({
        userId: authInfo.userId,
        typeId: roomInfo.roomtype.id,
        wallColor,
        floorColor,
        floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
      })
    }

    if (roomInfo.furniture && roomInfo.furniture.length > 0) {
      history.push('/add-furniture-list')
    } else {
      history.push('/add-furniture-details')
    }
  }

  return (
    <>
      <div className="container room">
        <Title type="h1">
          {`What is your ${
            roomInfo.roomtype.name ? roomInfo.roomtype.name : 'room'
          } color?`}
        </Title>

        <p>{`Choose your ${
          roomInfo.roomtype.namee ? roomInfo.roomtype.name : 'room'
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
