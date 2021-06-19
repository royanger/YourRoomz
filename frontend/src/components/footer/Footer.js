import * as React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <nav>
            <Link to="/">
              <div>Home</div>
            </Link>
          </nav>
          Copyright Us 2021
        </div>
      </footer>
    </>
  )
}

export default Footer
