import * as React from 'react'
import LoginButton from '../components/LoginButton'
import IntroText from '../components/IntroText'

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
