import * as React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, classes, to, callback }) => {
  return (
    <>
      <Link to={to}>
        <button className={classes}>{text}</button>
      </Link>
    </>
  )
}

export default Button
