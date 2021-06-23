import * as React from 'react'
import IntroText from '../IntroText'
import HeroCard from '../HeroCard'

const ItemDetails = () => {
  return (
    <>
      <div className="container existing-items">
        <IntroText
          variant="text"
          heading="What pre-existing items do you have?"
          paragraph="We'll show you pictures of items to pick from based on the criteria you provide"
        />
        {/* Has been created for layout purposes */}
        <form action="">
          <label for="furniture-type">Furniture Type:</label>
          <select name="furniture-type" id="furniture-type">
            <option value="coffee table">Coffee table</option>
          </select>
        </form>
        <p>Color</p>
        <div className="container-color">
          <div className="grid">
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
            <HeroCard to="/" text="" variant="card color" />
          </div>
          <div className="color-picker">
            <HeroCard to="/" text="" variant="picker-card color" />
          </div>
        </div>
        <p>Material</p>
        <div className="container-material">
          <HeroCard link="link" to="/" text="" variant="card material" />
          <HeroCard link="link" to="/" text="" variant="card material" />
          <HeroCard link="link" to="/" text="" variant="card material" />
          <HeroCard link="link" to="/" text="" variant="card material" />
        </div>
      </div>
    </>
  )
}

export default ItemDetails
