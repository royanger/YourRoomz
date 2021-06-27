import { createSlice } from '@reduxjs/toolkit'
import { CREATE_ROOM } from '../../graphql/room-queries'
import { graphqlClient } from '../graphql'
import { formatRoomObj } from '../helpers/formatRoomObj'
import { getRoomsById } from './roomsSlice'

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    setRoom: (state, { payload }) => {
      state.roomInfo = payload
    },
    setRoomType: (state, { payload }) => {
      state.roomInfo = payload
    },
    updateRoomType: (state, { payload }) => {
      state.roomInfo = payload
    },
    setColors: (state, { payload }) => {
      state.roomInfo = {
        ...state.roomInfo,
        ...payload,
      }
    },
    saveRoomStart: state => {
      state.loading = true
    },
    saveRoomSuccess: (state, { payload }) => {
      state.roomInfo = payload
      state.loading = false
    },
    saveRoomError: (state, { payload }) => {
      state.error = 'There was an error creating the new room'
    },
  },
})

export const {
  setRoom,
  setRoomType,
  setColors,
  saveRoomStart,
  saveRoomSuccess,
  saveRoomError,
} = roomSlice.actions

export const roomSelector = state => state.room

export const setRoomId = roomId => async dispatch => {
  dispatch(setRoom(roomId))
}

export const updateRoomInfo = roomType => async dispatch => {
  dispatch(setRoomType(roomType))
}

export const updateWallColor = wallColor => async dispatch => {
  console.log('wall color updated')
  dispatch(setColors({ wallColor: wallColor }))
}

export const updateFloorColor = floorColor => async dispatch => {
  console.log('floor color updated')
  dispatch(setColors({ floorColor: floorColor }))
}

export const createRoom = (user, room) => async dispatch => {
  dispatch(saveRoomStart())

  await graphqlClient
    .mutate({
      mutation: CREATE_ROOM,
      variables: {
        userId: user,
        typeId: room.roomtype.id,
        wallColor: room.wallColor,
        floorColor: room.floorColor,
        floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
      },
    })
    .then(results => {
      dispatch(saveRoomSuccess(formatRoomObj(results.data.createRoom)))
    })
  // Appears to run correctly after the above save, but rooms list not updated
  // with the new room
  dispatch(getRoomsById(user))
}

export default roomSlice.reducer