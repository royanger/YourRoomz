import * as React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ text, variant, link, to, callBack }) => {
  return (
    <>
      <Link className={link} to={to}>
        <div className={variant}>{text}</div>
      </Link>
    </>
  )
}

export default HeroCard
