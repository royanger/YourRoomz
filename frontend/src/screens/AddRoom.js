import * as React from 'react'
import { Link } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import IntroText from '../components/IntroText'

const AddRooms = () => {
  return (
    <>
      <div className="container room">
        <IntroText
          variant="room-heading"
          heading="Which room are you designing?"
          paragraph="Pick at least one room"
        />
        <div className="room-grid">
          <HeroCard to="/" text="Living Room" variant="room-card" />
          <HeroCard to="/" text="Living Room" variant="room-card" />
          <HeroCard to="/" text="Living Room" variant="room-card" />
          <HeroCard to="/" text="Living Room" variant="room-card" />
          <HeroCard to="/" text="Living Room" variant="room-card" />
          <HeroCard to="/" text="Living Room" variant="room-card" />
        </div>
        <Link to="/room-specs">
          <button>Next</button>
        </Link>
    </div>

    </>
  )
}

export default AddRooms
