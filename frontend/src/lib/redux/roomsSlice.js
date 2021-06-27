import { createSlice } from '@reduxjs/toolkit'
import { ROOMS_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../graphql'

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

export const getRoomsById = userId => async dispatch => {
  dispatch(roomsStart())
  try {
    //const results = await graphqlClient
    graphqlClient
      .query({
        query: ROOMS_QUERY,
        variables: {
          userId,
        },
      })
      .then(results => {
        dispatch(roomsSuccess(results.data.findRoomsByUser))
      })
  } catch (error) {
    dispatch(
      roomsFail(
        roomsFail(
          'There was a problem fetching rooms information from the database'
        )
      )
    )
  }
}

export default roomsSlice.reducer
