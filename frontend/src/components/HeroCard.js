import * as React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ text, variant, to, callBack }) => {
  return (
    <>
      <Link to={to}>
        <div className={variant}>{text}</div>
      </Link>
    </>
  )
}

export default HeroCard
