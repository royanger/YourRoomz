import * as React from 'react'
import { Link } from 'react-router-dom'
import HeroCards from '../components/HeroCards'
import IntroText from '../components/IntroText'

const AddRooms = () => {
  return (
    <>
      <div className="container add-rooms">
        <IntroText
          variant="add-rooms"
          heading="Which room are you designing?"
          paragraph="Pick at least one room"
        />
        <div className="grid add-rooms">
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
          <HeroCards to="/" text="Living Room" variant="add-rooms" />
        </div>
      </div>
      <Link to="/room-specs">Next</Link>
    </>
  )
}

export default AddRooms
