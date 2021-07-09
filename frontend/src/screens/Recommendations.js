import * as React from 'react'
import { useAuth } from '../lib/context/authContext'
import SelectCategory from '../components/recommendations/SelectCategory'
import SelectPriceRange from '../components/recommendations/SelectPriceRange'
import Comparison from '../components/recommendations/ViewWindow'
import Results from '../components/recommendations/Results'
import Button from '../components/Button'
import Title from '../components/Title'
import GenerateRecommendations from '../components/categories/GenerateRecommendations'

import { useMutation, useQueryClient, useQuery } from 'react-query'
import { getCart, createCart, createCartItem } from '../lib/graphql/cartQueries'
import useAmazonSearch, {
  getAmazonSearch,
} from '../lib/graphql/rainforestQueries'
import { getMockAPISearch } from '../lib/graphql/mockapiQueries'

const Recommendations = () => {
  const {
    authInfo: { userId },
  } = useAuth()
  const [showModal, setShowModal] = React.useState(false)
  const [results, setResults] = React.useState({})
  const [currentCategory, setCurrentCategory] = React.useState(0)
  const [priceRange, setPriceRange] = React.useState(4)
  const [selected, setSelected] = React.useState([])
  //   const [results, setResults] = React.useState()
  const queryClient = useQueryClient()

  const cart = useQuery(['cart', { userId: userId }], getCart)

  const createCartMutation = useMutation(createCart, {
    onSuccess: res => {
      queryClient.invalidateQueries('cart')
    },
  })

  const createCartItemMutation = useMutation(createCartItem, {
    onSuccess: res => {
      queryClient.invalidateQueries('cart')
    },
  })

  //   const amazonSearch = useQuery(
  //     ['amazon-search', { term: 'blue rug' }],
  //     getMockAPISearch
  //   )

  //   if (amazonSearch.error) {
  //     return `<p>${amazonSearch.error}</p>`
  //   }

  // TODO
  // The handleClick returns the value from the form, which is the index
  // This doesn't match correctly and is a bug to crush
  // Will need to get ID, and then when selecting a category pull array item
  // based on the ID, not the array index

  const handleCategorySelection = id => {
    console.log(id)
    setCurrentCategory(id)
  }

  const handlePriceSelection = price => {
    console.log(price)
    setPriceRange(price)
  }

  const handleAddToCart = async details => {
    console.log('add to cart', details)
    console.log('cart', cart)
    if (!cart.data) {
      await createCartMutation.mutate({
        userId: userId,
      })
      createCartItemMutation.mutate({
        ...details,
      })
    } else {
      createCartItemMutation.mutate({
        cartId: cart.data.id,
        ...details,
      })
    }
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
                selected={selected}
                setSelected={setSelected}
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
