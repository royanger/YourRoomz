import * as React from 'react'
import IntroText from '../IntroText'
import HeroCard from '../HeroCard'

const ItemComparison = () => {
  return (
    <>
      <div className="container existing-items">
        <div>
          <IntroText
            variant="text"
            heading="Choose pre-existing items(s)"
            paragraph="Choose the item(s) that looks similar to what you have."
          />
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
