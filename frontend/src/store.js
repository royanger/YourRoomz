import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './lib/redux/roomsSlice'
import roomReducer from './lib/redux/roomSlice'
import { api } from './lib/redux/roomsService'

export default configureStore({
  reducer: {
    rooms: roomsReducer,
    room: roomReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})
