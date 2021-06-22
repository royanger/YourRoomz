import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import HeroCard from '../components/HeroCard'

const CurrentItemsDetails = () => {
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
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
            <HeroCard to="/" text="" variant="color-card" />
          </div>
          <div className="color-picker">
            <HeroCard to="/" text="" variant="picker-card" />
          </div>
        </div>
        <p>Material</p>
        <div className="container-material">
          <HeroCard link="link" to="/" text="" variant="material-card" />
          <HeroCard link="link" to="/" text="" variant="material-card" />
          <HeroCard link="link" to="/" text="" variant="material-card" />
          <HeroCard link="link" to="/" text="" variant="material-card" />
        </div>
        <div className="container-pre">
          <IntroText
            variant="text"
            heading="Choose pre-existing items(s)"
            paragraph="Choose the item(s) that looks similar to what you have."
          />
        </div>
        <div className="grid-pre">
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
          <HeroCard link="link" to="/" text="" variant="pre-card" />
        </div>
      </div>
      <Link to="/add-items">Back</Link>
      <Link to="/category-recommendations">Next</Link>
    </>
  )
}

export default CurrentItemsDetails
