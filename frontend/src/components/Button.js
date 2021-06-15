import * as React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, variant, to, callback }) => {
  return (
    <>
      {/* <Link to={to}> */}
      <button onClick={callback} className={`btn ${variant}`}>
        {text}
      </button>
      {/* </Link> */}
    </>
  )
}

export default Button
