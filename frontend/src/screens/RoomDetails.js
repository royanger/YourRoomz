import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import HeroCard from '../components/HeroCard'

const RoomDetails = () => {
  return (
    <>
      <div className="container room-details">
        <IntroText
          variant="heading"
          heading="What is your living room color?"
          paragraph="Choose your living room wall color and floor color"
        />
        <section>
          <div className="wall-color">
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
          <div className="c-picker">wall color picker</div>
        </section>
        <section>
          <div className="floor-color">
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
          <div className="f-picker">floor color picker</div>
        </section>
      </div>
      <Link to="/add-room">Back</Link>
      <Link to="/add-items">Next</Link>
    </>
  )
}

export default RoomDetails
