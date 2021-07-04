import * as React from 'react'
import SelectCategory from '../components/recommendations/SelectCategory'
import SelectPriceRange from '../components/recommendations/SelectPriceRange'
import Comparison from '../components/recommendations/Comparison'
import Results from '../components/recommendations/Results'
import Button from '../components/Button'
import { useQueryClient, useQuery } from 'react-query'
import useAmazonSearch, {
  getAmazonSearch,
} from '../lib/graphql/rainforestQueries'
import { getMockAPISearch } from '../lib/graphql/mockapiQueries'

const Recommendations = () => {
  //   const [results, setResults] = React.useState()
  //   const queryClient = useQueryClient()
  //   const amazonSearch = useAmazonSearch('blue rug')
  //   const amazonSearch = useQuery(['amazon-search', 'blue rug'], getAmazonSearch)
  const amazonSearch = useQuery(
    ['amazon-search', { term: 'blue rug' }],
    getMockAPISearch
  )

  if (amazonSearch.error) {
    return `<p>${amazonSearch.error}</p>`
  }

  return (
    <div className="container recommendations">
      <div className="interface">
        <div className="recommendation-menu">
          <Button text="Add selected item(s) to cart" variant="small" />
          <SelectCategory />
          <SelectPriceRange />
          {amazonSearch.data ? <Results results={amazonSearch.data} /> : ''}
        </div>
        <Comparison />
      </div>

      <div>Recommendations screen</div>
    </div>
  )
}

export default Recommendations
