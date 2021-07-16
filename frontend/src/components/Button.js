import * as React from 'react'
//import { Link } from 'react-router-dom'

const Button = ({
  children,
  id,
  text,
  variant,
  callback,
  disabled,
  hidden,
}) => {
  if (hidden) return <div></div>
  return (
    <div className={`button ${variant ? variant : ''}`}>
      <button
        id={id}
        onClick={callback}
        className={`btn ${variant ? variant : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        {text}
        {children}
      </button>
    </div>
  )
}

export default Button
