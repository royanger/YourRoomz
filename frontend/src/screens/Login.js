import * as React from 'react'
import LoginButton from '../components/LoginButton'
import IntroText from '../components/IntroText'
import Modal from '../components/Modal'

const providers = [
  {
    title: 'Google',
    provider: 'google',
  },
  {
    title: 'Twitter',
    provider: 'twitter',
  },
  {
    title: 'GitHub',
    provider: 'github',
  },
]

const Login = () => {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const twitterLogin = () => {
    window.open('http://localhost:5000/auth/twitter', '_self')
  }

  const loginCallback = provider => {
    window.open(`http://localhost:5000/auth/${provider}`, '_self')
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
          <LoginButton
            to="#"
            text="Sign in with Google"
            callback={googleLogin}
            variant="login-btn-cta"
          />
          <LoginButton
            to="/"
            text="Sign in with Facebook"
            variant="login-btn-cta"
          />
          <LoginButton
            to="/"
            text="Sign in with Twitter"
            callback={twitterLogin}
            variant="login-btn-cta"
          />
          <p>TEst</p>
          {providers.map(({ provider, title }) => {
            return (
              <LoginButton
                text={`Sign in with ${title} `}
                callback={() => loginCallback(provider)}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Login
