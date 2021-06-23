import * as React from 'react'
import HeroCard from '../HeroCard'
import Title from '../Title'

const ItemComparison = () => {
  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Choose pre-existing items</Title>

          <p>Choose the item(s) that looks similar to what you have.</p>
        </div>
        <div className="grid-one">
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
          <HeroCard link="link" to="/" text="" variant="card existing-one" />
        </div>
      </div>
    </>
  )
}

export default ItemComparison
