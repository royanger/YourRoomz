import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import InputField from '../components/InputField'

const RoomSpecs = () => {
  return (
    <>
      <div className="container room-specs">
        <IntroText
          heading="What is your living room dimesion?" 
          paragraph="Enter your living room dimensions in feeet and inches"
        />
        <InputField />
        <Link to="/add-room">Back</Link>
        <Link to="/room-details">Next</Link>
      </div>
    </>
  )
}

export default RoomSpecs
