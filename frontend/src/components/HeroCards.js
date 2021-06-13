import * as React from 'react'
import { Link } from 'react-router-dom'

const HeroCards = ({ text, classes, to, callBack }) => {
  return (
    <>
      <Link to={to}>
        <div className={classes}>{text}</div>
      </Link>
    </>
  )
}

export default HeroCards
