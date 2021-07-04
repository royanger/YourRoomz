import axios from 'axios'

export const getMockAPISearch = async searchTerm => {
  const { data } = await axios.get(
    'https://60e143fe5a5596001730f065.mockapi.io/search'
  )
  return data
}
