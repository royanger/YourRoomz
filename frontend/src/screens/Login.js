import * as React from 'react';
import Header from '../components/header/Header'

const Login = () => {
  return (
    <>
      <Header />
        <div className="login">
          <div className="login__intro">
            <h1>Get deco recommendations for free</h1>
            <p>Sign into your account</p>
              <button className="login__btn">Sign in with Google</button>
              <button className="login__btn">Sign in with Facebook</button>
              <button className="login__btn">Sign in with Twitter</button>
              <button className="login__btn">Not signed up? Sign up</button>
          </div>  
        </div>
    </>
  )
}

export default Login
