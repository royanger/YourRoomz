import * as React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ text, classes, variant, to, callBack }) => {
  return (
    <>
      <Link to={to}>
        <div className={`herocard ${variant}`}>{text}</div>
      </Link>
    </>
  )
}

export default HeroCard
