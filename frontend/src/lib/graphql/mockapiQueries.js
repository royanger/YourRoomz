import axios from 'axios'

export const getMockAPISearch = async searchTerm => {
  const { data } = await axios.get(
    //'https://run.mocky.io/v3/1ca19f60-1884-47fc-80fc-747dc2a3c593'
    //  'https://60e143fe5a5596001730f065.mockapi.io/search'
    'http://demo5724031.mockable.io/search'
  )
  return data
}
