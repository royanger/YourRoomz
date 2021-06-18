import * as React from 'react'

const LoginButton = ({ text, callback }) => {
  return (
    <div className="login-button">
      <button onClick={() => callback()}>{text}</button>
    </div>
  )
}

export default LoginButton
