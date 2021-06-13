import * as React from 'react'
import Button from '../components/Button'
import IntroText from '../components/IntroText'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__intro">
          <IntroText
            heading="Get decor recommendations for free"
            paragraph="Sign into your account"
          />
          <Button to="/" text="Sign in with Google" classes="login__btn" />
          <Button to="/" text="Sign in with Facebook" classes="login__btn" />
          <Button to="/" text="Sign in with Twitter" classes="login__btn" />
        </div>
      </div>
    </>
  )
}

export default Login
