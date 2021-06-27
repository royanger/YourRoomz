import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './lib/redux/roomsSlice'
import roomReducer from './lib/redux/roomSlice'

export default configureStore({
  reducer: {
    rooms: roomsReducer,
    room: roomReducer,
  },
})
