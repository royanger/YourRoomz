import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/context/authContext'
import { formatName } from '../../lib/helpers/formatUserInfo'
import useVisible from '../../lib/hooks/useVisible'

const LayerGroup = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
    </svg>
  )
}

const SignOut = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
    </svg>
  )
}

const SquareSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 66 66"
      version="1.1"
      className="arrow"
      fill="currentColor"
    >
      <g transform="matrix(1,0,0,1,-214.821,-144.9)">
        <rect x="214.821" y="144.9" width="65.65" height="65.65" />
      </g>
    </svg>
  )
}

const Profile = () => {
  const { ref, isVisible, setIsVisible } = useVisible(false)
  const {
    logout,
    authInfo,
    authInfo: { gravatar },
  } = useAuth()

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      setIsVisible(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  })

  const handleMenuStatus = () => {
    setIsVisible(prevState => {
      return prevState ? false : true
    })
  }

  const handleMenuClose = () => {
    setIsVisible(false)
  }
  const formattedName = formatName(authInfo)
  const name = formatName ? formattedName : 'Profile'

  return (
    <>
      <div ref={ref} className="profile-button">
        <button className="profile-img" onClick={handleMenuStatus}>
          <img src={gravatar} alt="Profile" />
        </button>
        <div
          className={`profile-menu-container ${isVisible ? 'open' : 'closed'}`}
        >
          <div className={`profile-menu`}>
            <SquareSVG />
            <div className="inner-container">
              <div>
                <div className="name">
                  <Link to="/profile" onClick={handleMenuClose}>
                    {name}
                  </Link>
                </div>
                {authInfo.email ? (
                  <div className="email">{authInfo.email}</div>
                ) : (
                  ''
                )}
                <div className="rooms">
                  <Link to="/profile" onClick={handleMenuClose}>
                    <LayerGroup /> My Rooms
                  </Link>
                </div>
                <div className="logout">
                  <button onClick={logout}>
                    <SignOut /> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
