import * as React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__intro">
          <h1>Get decor recommendations for free</h1>
          <p>Sign into your account</p>
          <Button to="/" text="Sign in with Google" classes="login__btn" />
          <Button to="/" text="Sign in with Facebook" classes="login__btn" />
          <Button to="/" text="Sign in with Twitter" classes="login__btn" />
        </div>
      </div>
    </>
  )
}

export default Login
