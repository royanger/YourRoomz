import * as React from 'react'
import LoginButton from '../components/LoginButton'
import Title from '../components/Title'

const providers = [
  {
    title: 'Google',
    provider: 'google',
    color: '#5185EC',
    icon: 'google',
  },
  {
    title: 'Twitter',
    provider: 'twitter',
    color: '#6AABE8',
    icon: 'twitter',
  },
  {
    title: 'GitHub',
    provider: 'github',
    color: 'rgb(36, 41, 46)',
    icon: 'github',
  },
]

const Login = () => {
  const loginCallback = provider => {
    window.open(`http://localhost:5000/auth/${provider}`, '_self')
  }
  return (
    <>
      <div className="container login">
        <h1>
          <img src="/images/YourRoomz-logo.png" alt="YourRoomz" />
        </h1>
        <Title type="h1">Get Recommendations For Free</Title>

        <p>Create and account or Sign in</p>
        <div className="login-btn-container">
          {providers.map(({ provider, title, color, icon }) => {
            return (
              <LoginButton
                key={provider}
                text={`Sign in with ${title}`}
                callback={() => loginCallback(provider)}
                color={color}
                icon={icon}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Login
