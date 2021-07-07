import * as React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

const Landing = () => {
  return (
    <>
      <Header />
      <main className="landing">
        <div className="container">
          <div>
            <h2>Get recommendations for free</h2>
            <h1>We Help You Create Your Dream Room.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisc elit. Nam nisl
              placerat vitae sit tellus. Amet ac sed porttitor eget interdum.
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
