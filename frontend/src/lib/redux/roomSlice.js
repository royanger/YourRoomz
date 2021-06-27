import { createSlice } from '@reduxjs/toolkit'
import { ROOMS_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../graphql'

export const roomSlice = createSlice({
  name: 'room',
  initialState: {},
  reducers: {
    setRoom: (state, { payload }) => {
      state.roomInfo = payload
    },
    setRoomType: (state, { payload }) => {
      state.roomInfo = { roomtype: payload }
    },
    updateRoomType: (state, { payload }) => {
      state.roomInfo = payload
    },
  },
})

export const { setRoom, setRoomType } = roomSlice.actions

export const roomSelector = state => state.room

export const setRoomId = roomId => async dispatch => {
  dispatch(setRoom(roomId))
}

export const updateRoomInfo = roomType => async dispatch => {
  dispatch(setRoomType(roomType))
}

export default roomSlice.reducer
