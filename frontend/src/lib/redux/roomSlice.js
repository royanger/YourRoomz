import { createSlice } from '@reduxjs/toolkit'
// import { formatRoomObj } from '../helpers/formatRoomObj'

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
    updateRoomStart: state => {
      state.loading = true
    },
    updateRoomSuccess: (state, { payload }) => {
      state.roomInfo = payload
      state.loading = false
    },
    updateRoomError: (state, { payload }) => {
      state.error = 'There was an error updating the new room'
    },
    clearRoomInfo: (state, { payload }) => {
      state.roomInfo = {}
    },
    addFurniture: (state, { payload }) => {
      state.roomInfo.newFurniture = payload
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
  updateRoomStart,
  updateRoomSuccess,
  updateRoomError,
  clearRoomInfo,
  addFurniture,
} = roomSlice.actions

export const roomSelector = state => state.room

export const setRoomId = roomId => async dispatch => {
  dispatch(setRoom(roomId))
}

export const updateRoomInfo = roomType => async dispatch => {
  dispatch(setRoomType(roomType))
}

export const updateWallColor = wallColor => async dispatch => {
  dispatch(setColors({ wallColor: wallColor }))
}

export const updateFloorColor = floorColor => async dispatch => {
  dispatch(setColors({ floorColor: floorColor }))
}

export const clearRoom = () => dispatch => {
  dispatch(clearRoomInfo())
}

export const updateNewFurniture = newFurniture => async dispatch => {
  dispatch(addFurniture(newFurniture))
}

export default roomSlice.reducer
