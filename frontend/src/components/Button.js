import * as React from 'react'
//import { Link } from 'react-router-dom'

const Button = ({ id, text, variant, callback, disabled, hidden }) => {
  if (hidden) return <div></div>
  return (
    <div className={`button ${variant}`}>
      <button
        id={id}
        onClick={callback}
        className={`btn ${variant} ${disabled ? 'disabled' : ''}`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
