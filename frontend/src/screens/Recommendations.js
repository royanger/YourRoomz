import * as React from 'react'
import SelectCategory from '../components/recommendations/SelectCategory'
import SelectPriceRange from '../components/recommendations/SelectPriceRange'
import Comparison from '../components/recommendations/ViewWindow'
import Results from '../components/recommendations/Results'
import Button from '../components/Button'
import Title from '../components/Title'
import GenerateRecommendations from '../components/categories/GenerateRecommendations'

import { useQueryClient, useQuery } from 'react-query'
import useAmazonSearch, {
  getAmazonSearch,
} from '../lib/graphql/rainforestQueries'
import { getMockAPISearch } from '../lib/graphql/mockapiQueries'

const Recommendations = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [results, setResults] = React.useState({})
  const [currentCategory, setCurrentCategory] = React.useState(0)
  const [priceRange, setPriceRange] = React.useState(4)
  //   const [results, setResults] = React.useState()
  //   const queryClient = useQueryClient()

  //   const amazonSearch = useQuery(
  //     ['amazon-search', { term: 'blue rug' }],
  //     getMockAPISearch
  //   )

  //   if (amazonSearch.error) {
  //     return `<p>${amazonSearch.error}</p>`
  //   }

  const handleCategorySelection = id => {
    setCurrentCategory(id)
  }

  const handlePriceSelection = price => {
    console.log(price)
    setPriceRange(price)
  }

  return (
    <div className="container recommendations">
      <div className="interface">
        <div className="recommendation-menu">
          <div className="section1">
            <Title type="h1">Our Recommendations</Title>
            <Button text="Add selected item(s) to cart" />
          </div>
          <hr />
          <div className="section1">
            {results.length > 0 ? (
              <SelectCategory
                results={results}
                handleClick={handleCategorySelection}
                currentCategory={currentCategory}
              />
            ) : (
              ''
            )}
            <SelectPriceRange
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleClick={handlePriceSelection}
            />
            {results.length > 0 ? (
              <Results
                results={results}
                currentCategory={currentCategory}
                priceRange={priceRange}
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <Comparison />
      </div>

      <GenerateRecommendations
        showModal={showModal}
        setShowModal={setShowModal}
        setResults={setResults}
      />
    </div>
  )
}

export default Recommendations
