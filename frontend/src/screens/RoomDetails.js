import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import '../styles/_room-details.scss'

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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="c-picker">wall color picker</div>
        </section>
        <section>
          <div className="floor-color">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="f-picker">floor color picker</div>
        </section>
      </div>
      <Link to="/room-specs">Back</Link>
      <Link to="/add-items">Next</Link>
    </>
  )
}

export default RoomDetails
