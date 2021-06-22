import * as React from 'react'
import { axiosConfig as axios } from '../axios'
import md5 from 'md5'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [loading, setLoading] = React.useState(true)
  const [authInfo, setAuthInfo] = React.useState({
    isAuthenticated: false,
    userId: '',
    email: '',
    givenName: '',
    familyName: '',
    gravatar: '',
  })

  const fetch = async () => {
    try {
      const res = await axios.get('/auth/authcheck')
      let gravatar
      if (res.data.user.email) {
        const hashedEmail = md5(res.data.user.email)
        gravatar = `https://www.gravatar.com/avatar/${hashedEmail}.jpg?s=150?d=http%3A%2F%2Flocalhost.com%3A3000%2Fimages%2Fprofile.pngg`
      }
      setAuthInfo(prevState => ({
        ...prevState,
        ...res.data.user,
        gravatar,
      }))
      setLoading(false)
    } catch (error) {
      const data =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      console.log('error', data)
    }
  }

  React.useMemo(() => {
    fetch()
  }, [])

  const logout = async () => {
    try {
      await axios.post('auth/logout')
      setAuthInfo({ isAuthenticated: false })
      window.location.href = '/login'
    } catch (error) {
      setAuthInfo({ isAuthenticated: false })
      window.location.href = '/login'
      throw new Error('There was an error completing the logout.')
    }
  }

  const contextValue = { authInfo, loading, logout }

  return (
    <>
      <AuthContext.Provider value={contextValue} {...props} />
    </>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
