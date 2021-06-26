import * as React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import { CATEGORY_QUERY } from '../graphql/category'
import { graphqlClient } from '../lib/graphql'
import RecommendedItem from '../components/categories/RecommendedItem'

const CategoryRecommendations = () => {
  const [categories, setCategories] = React.useState()

  React.useEffect(() => {
    graphqlClient
      .query({
        query: CATEGORY_QUERY,
      })
      .then(results => {
        setCategories(results.data.getFurnitureCategories)
      })
  }, [])
  return (
    <>
      <div className="recommendations">
        <Title type="h1">
          What category of items do you want us to recommend?
        </Title>

        <p>Choose the category of you want us to recommend</p>

        <div className="grid">
          {categories?.map(category => {
            return <RecommendedItem key={category.id} category={category} />
          })}
        </div>
      </div>
      <Link to="/add-details">Back</Link>
      <Link to="/loading">Next</Link>
    </>
  )
}

export default CategoryRecommendations
