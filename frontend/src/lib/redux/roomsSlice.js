import { createSlice } from '@reduxjs/toolkit'

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    loading: true,
    save: false,
  },
  reducers: {
    roomsStart: state => {
      state.loading = true
      state.error = false
    },
    roomsSuccess: (state, { payload }) => {
      state.loading = false
      state.roomsList = payload
    },
    roomsFail: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { roomsStart, roomsSuccess, roomsFail } = roomsSlice.actions

export const roomsSelector = state => state.rooms

export default roomsSlice.reducer
