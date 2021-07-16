import * as React from 'react'
import { useAuth } from '../lib/context/authContext'
import SelectCategory from '../components/recommendations/SelectCategory'
import SelectPriceRange from '../components/recommendations/SelectPriceRange'
import ViewWindow from '../components/recommendations/ViewWindow'
import Results from '../components/recommendations/Results'
import Button from '../components/Button'
import Title from '../components/Title'
import GenerateRecommendations from '../components/categories/GenerateRecommendations'
import { DragDropContext } from 'react-beautiful-dnd'

import { useMutation, useQueryClient, useQuery } from 'react-query'
import { getCart, createCartItem } from '../lib/graphql/cartQueries'

const Recommendations = () => {
  const {
    authInfo: { userId },
  } = useAuth()
  const [showModal, setShowModal] = React.useState(false)
  const [results, setResults] = React.useState({})
  const [currentCategory, setCurrentCategory] = React.useState(0)
  const [priceRange, setPriceRange] = React.useState(4)
  const [selected, setSelected] = React.useState([])
  const [preview, setPreview] = React.useState([])
  const queryClient = useQueryClient()

  const cart = useQuery(['cart', { userId: userId }], getCart)

  const createCartItemMutation = useMutation(createCartItem, {
    onSuccess: res => {
      queryClient.invalidateQueries('cart')
    },
  })

  const handleCategorySelection = id => {
    const arrayPosition = results.map(result => {
      return result.category === id ? 'match' : 'fail'
    })

    setCurrentCategory(arrayPosition.indexOf('match'))
  }

  const handlePriceSelection = price => {
    setPriceRange(price)
  }

  const handleAddToCart = async e => {
    selected.map(selectedItem => {
      if (
        cart.data.cartItems.filter(e => e.asin === selectedItem.asin).length ===
        0
      ) {
        // item not in cart, so add
        return createCartItemMutation.mutate({
          cartId: cart.data.id,
          ...selectedItem,
        })
      }

      return null
    })
    setTimeout(() => {
      setSelected([])
    }, 500)
  }

  const copy = (source, destination, droppableSource, droppableDestination) => {
    //  console.log('source', source)
    //  console.log('destination', destination)

    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const item = sourceClone[droppableSource.index]
    //  console.log('item', item)

    destClone.splice(droppableDestination.index, 0, item)
    //  console.log('destClone', destClone)

    return destClone
  }

  const onDragEnd = result => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableID === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    setPreview(
      copy(results[currentCategory].data, preview, source, destination)
    )
  }

  return (
    <div className="container recommendations">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="interface">
          <div className="recommendation-menu">
            <div className="section1">
              <Title type="h1">Our Recommendations</Title>
              <Button
                variant={selected?.length > 0 ? 'active' : 'disabled'}
                callback={handleAddToCart}
              >
                Add selected item(s) to cart
              </Button>
            </div>
            <hr />
            <div className="section2">
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
                results={results}
                currentCategory={currentCategory}
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
            {/* <div className="summary">
              <p>
                {results && currentCategory && currentCategory > 0
                  ? `${results[currentCategory].data.length} items`
                  : 'No items'}
              </p>
            </div> */}
          </div>
          <ViewWindow preview={preview} setPreview={setPreview} />
        </div>

        <GenerateRecommendations
          showModal={showModal}
          setShowModal={setShowModal}
          setResults={setResults}
        />
      </DragDropContext>
    </div>
  )
}

export default Recommendations
