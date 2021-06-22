import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import HeroCard from '../components/HeroCard'

const CategoryRecommendations = () => {
  return (
    <>
      <div className="container-recommend">
        <IntroText
          variant="text"
          heading="What category of items do you want us to recommend?"
          paragraph="Choose the category of you want us to recommend"
        />
        <div className="main">
          <div className="grid">
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
            <HeroCard to="/" text="Category" variant="category" />
          </div>
        </div>
      </div>
      <Link to="/add-details">Back</Link>
      <Link to="/loading">Next</Link>
    </>
  )
}

export default CategoryRecommendations
