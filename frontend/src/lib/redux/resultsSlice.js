import { createSlice } from '@reduxjs/toolkit'
// import { formatRoomObj } from '../helpers/formatRoomObj'

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    setResults: (state, { payload }) => {
      state.results = {
        ...state.results,
        ...payload,
      }
    },
  },
})

export const { setResults } = resultsSlice.actions

export const resultsSelector = state => state.results

export const storeResults = () => dispatch => {
  dispatch(setResults())
}

export default resultsSlice.reducer
