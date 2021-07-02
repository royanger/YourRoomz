import * as React from 'react'
import Title from '../components/Title'
import { CATEGORY_QUERY } from '../lib/graphql/category'
import { graphqlClient } from '../lib/graphql'
import RecommendedItem from '../components/categories/RecommendedItem'
import Footer from '../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { useRecommendedCategories } from '../lib/react-query/categoryQueries'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'

const CategoryRecommendations = () => {
  const history = useHistory()
  const [categories, setCategories] = React.useState()
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const { roomInfo } = useSelector(roomSelector)
  const { data, error, isFetching } = useRecommendedCategories(roomInfo.id)

  React.useEffect(() => {
    graphqlClient
      .query({
        query: CATEGORY_QUERY,
      })
      .then(results => {
        setCategories(results.data.getFurnitureCategories)
      })
  }, [])

  React.useEffect(() => {
    if (selectedCategories) {
      setNextDisabled(false)
    }
  }, [selectedCategories])

  const handleClick = id => {
    if (selectedCategories.includes(id)) {
      // remove from array
      const items = [...selectedCategories]
      items.splice(selectedCategories.indexOf(id), 1)
      setSelectedCategories(items)
    } else {
      // add category id to array
      setSelectedCategories(prevState => {
        return [...prevState, id]
      })
    }
  }

  const handleSave = e => {
    //  history.push('/recommendations')
  }

  return (
    <>
      <div className="container recommendations">
        <Title type="h1">What category of furniture should we recommend?</Title>

        <p>
          Select any furniture categories that you’re sure you want included in
          our recommendations.
        </p>

        <div className="grid">
          {categories?.map(category => {
            return (
              <RecommendedItem
                key={category.id}
                category={category}
                handleClick={handleClick}
                checked={true}
                selectedCategories={selectedCategories}
              />
            )
          })}
        </div>
      </div>

      <Footer
        callback={handleSave}
        nextDisabled={nextDisabled}
        prev="/add-furniture-list"
      />
    </>
  )
}

export default CategoryRecommendations
