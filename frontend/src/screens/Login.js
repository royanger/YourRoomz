import * as React from 'react'
import Button from '../components/Button'
import IntroText from '../components/IntroText'

const Login = () => {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const twitterLogin = () => {
    window.open('http://localhost:5000/auth/twitter', '_self')
  }

  return (
    <>
      <div className="container login">
        <IntroText
          variant="login"
          heading="Get decor recommendations for free"
          paragraph="Sign into your account"
        />
        <div className="btn-container login">
          <Button
            to="#"
            text="Sign in with Google"
            callback={googleLogin}
            variant="login"
          />
          <Button to="/" text="Sign in with Facebook" variant="login" />
          <Button
            to="/"
            text="Sign in with Twitter"
            callback={twitterLogin}
            variant="login"
          />
        </div>
      </div>
    </>
  )
}

export default Login
