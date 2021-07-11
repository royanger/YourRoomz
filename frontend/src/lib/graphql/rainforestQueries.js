import { useQuery } from 'react-query'
import axios from 'axios'

// const apiURL= https://60e143fe5a5596001730f065.mockapi.io/

export const getAmazonSearch = async searchTerm => {
  const params = {
    api_key: process.env.REACT_APP_RAINFOREST_API,
    type: 'search',
    amazon_domain: 'amazon.com',
    search_term: searchTerm,
  }

  const { data } = await axios.get('https://api.rainforestapi.com/request', {
    params,
  })
  return data
}

export default function useAmazonSearch(searchTerm) {
  return (
    useQuery(['amazon-search', { searchTerm }]),
    () => getAmazonSearch(searchTerm)
  )
}
