import * as React from 'react'
import { Link } from 'react-router-dom'

const HeroCards = ({ text, classes, variant, to, callBack }) => {
  return (
    <>
      <Link to={to}>
        <div className={`herocards ${variant}`}>{text}</div>
      </Link>
    </>
  )
}

export default HeroCards
