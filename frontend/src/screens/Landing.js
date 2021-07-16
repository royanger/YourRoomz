import * as React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

const Landing = () => {
  console.log(process.env.REACT_APP_API_URI)
  return (
    <>
      <Header />
      <main className="landing">
        <div className="image">
          <img src="/images/bg-md.jpg" alt="A well furnished living room" />
        </div>
        <div className="container">
          <div>
            <h2>Get recommendations for free</h2>
            <h1>We Help You Create Your Dream Room.</h1>
            <p>
              Finding furniture that complements what you already have is
              difficult and time-consuming. Give us some details about your
              current set-up, and we’ll search for items that we think will tie
              your room together.
            </p>
            <div className="button">
              <Link to="/login">
                <button className="getstarted button">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Landing
