import * as React from 'react'
import Title from '../components/Title'
import { CATEGORY_QUERY } from '../lib/graphql/category'
import { graphqlClient } from '../lib/graphql'
import RecommendedItem from '../components/categories/RecommendedItem'
import Footer from '../components/footer/Footer'
import { useHistory } from 'react-router-dom'

const CategoryRecommendations = () => {
  const history = useHistory()
  const [categories, setCategories] = React.useState()
  const [selectedCategories, setSelectedCategories] = React.useState()
  const [nextDisabled, setNextDisabled] = React.useState(true)

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

  const handleClick = e => {
    setSelectedCategories(e.target.id)
  }

  const handleSave = e => {
    history.push('/recommendations')
  }

  return (
    <>
      <div className="recommendations">
        <Title type="h1">
          What category of items do you want us to recommend?
        </Title>

        <p>Choose the category of you want us to recommend</p>

        <div className="grid">
          {categories?.map(category => {
            return (
              <RecommendedItem
                key={category.id}
                category={category}
                handleClick={handleClick}
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
