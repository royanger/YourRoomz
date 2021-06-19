import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/context/authContext'
import CartButton from './Cartbutton'

const Profile = () => {
  const [menuOpen, setMenuOpen] = React.useState('')

  const {
    logout,
    isAuthenticated,
    authInfo: { displayName, givenName, familyName, email, gravatar },
  } = useAuth()

  const handleMenuStatus = () =>
    setMenuOpen(prevState => {
      return prevState === 'open' ? '' : 'open'
    })

  const handleMenuClose = () => setMenuOpen('')

  return (
    <>
      <div className="profile-button">
        <button className="profile-img" onClick={handleMenuStatus}>
          <img src={gravatar} alt="Profile" />
        </button>
        <div className={`profile-menu ${menuOpen}`}>
          <div>
            <Link to="/profile" onClick={handleMenuClose}>
              Profile
            </Link>
            <CartButton onClick={handleMenuClose} />
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
