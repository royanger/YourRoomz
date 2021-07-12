import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/context/authContext'
import { HOME, LANDING } from '../../constants/routes'

const Brand = () => {
  const {
    authInfo: { isAuthenticated },
  } = useAuth()
  const location = isAuthenticated ? HOME : LANDING

  return (
    <>
      <div className="brand">
        <Link to={location}>
          <img src="/images/YourRoomz-logo.png" alt="YourRoomz" />
        </Link>
      </div>
    </>
  )
}

export default Brand
