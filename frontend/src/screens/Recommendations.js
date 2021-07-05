import * as React from 'react'
import SelectCategory from '../components/recommendations/SelectCategory'
import SelectPriceRange from '../components/recommendations/SelectPriceRange'
import Comparison from '../components/recommendations/ViewWindow'
import Results from '../components/recommendations/Results'
import Button from '../components/Button'
import GenerateRecommendations from '../components/categories/GenerateRecommendations'

import { useQueryClient, useQuery } from 'react-query'
import useAmazonSearch, {
  getAmazonSearch,
} from '../lib/graphql/rainforestQueries'
import { getMockAPISearch } from '../lib/graphql/mockapiQueries'

const Recommendations = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [results, setResults] = React.useState({})
  //   const [results, setResults] = React.useState()
  //   const queryClient = useQueryClient()

  //   const amazonSearch = useQuery(
  //     ['amazon-search', { term: 'blue rug' }],
  //     getMockAPISearch
  //   )

  //   if (amazonSearch.error) {
  //     return `<p>${amazonSearch.error}</p>`
  //   }

  return (
    <div className="container recommendations">
      <div className="interface">
        <div className="recommendation-menu">
          <Button text="Add selected item(s) to cart" variant="small" />
          <SelectCategory />
          <SelectPriceRange />
          {/* {amazonSearch.data ? <Results results={amazonSearch.data} /> : ''} */}
        </div>
        <Comparison />
      </div>

      <div>Recommendations screen</div>

      <GenerateRecommendations
        showModal={showModal}
        setShowModal={setShowModal}
        setResults={setResults}
      />
    </div>
  )
}

export default Recommendations
