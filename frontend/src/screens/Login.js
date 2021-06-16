import * as React from 'react'
import Button from '../components/Button'
import IntroText from '../components/IntroText'

const Login = () => {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return (
    <>
      <div className="container login">
        <IntroText
          variant="login-heading"
          heading="Get decor recommendations for free"
          paragraph="Sign into your account"
        />
        <div className="login-btn-container">
          <Button
            to="#"
            text="Sign in with Google"
            callback={googleLogin}
            variant="login-btn-cta"
          />
          <Button to="/" text="Sign in with Facebook" variant="login-btn-cta" />
          <Button to="/" text="Sign in with Twitter" variant="login-btn-cta" />
        </div>
      </div>
    </>
  )
}

export default Login
