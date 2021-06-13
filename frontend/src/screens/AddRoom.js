import * as React from 'react'
import { Link } from 'react-router-dom'
import HeroCards from '../components/HeroCards'
import IntroText from '../components/IntroText'

const AddRooms = () => {
  return (
    <>
      <div className="add-rooms">
        <div className="add-rooms__container">
          <div className="add-rooms__intro">
            <IntroText
              heading="Which room are you designing?"
              paragraph="Pick at least one room"
            />
          </div>
          <div className="add-rooms__grid">
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
            <HeroCards to="/" text="Living Room" classes="add-rooms__hero" />
          </div>
        </div>
      </div>
      <Link to="/room-specs">Next</Link>
    </>
  )
}

export default AddRooms
