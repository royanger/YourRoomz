import * as React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ id, text, variant, to, callback, disabled, hidden }) => {
  if (hidden) return <div></div>
  return (
    <div className={`button ${variant}`}>
      <Link to={to}>
        <button
          id={id}
          onClick={callback}
          className={`btn ${variant} ${disabled ? 'disabled' : ''}`}
        >
          {text}
        </button>
      </Link>
    </div>
  )
}

export default Button
