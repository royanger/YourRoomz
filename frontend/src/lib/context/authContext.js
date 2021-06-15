import * as React from 'react'
import { axiosConfig as axios } from '../axios'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [loading, setLoading] = React.useState(true)
  const [authInfo, setAuthInfo] = React.useState({
    isAuthenticated: false,
    email: '',
    firstName: '',
    lastName: '',
  })

  const fetch = async () => {
    try {
      const res = await axios.get('/auth/authcheck')
      setAuthInfo(prevState => ({ ...prevState, ...res.data.user }))
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

  const contextValue = { authInfo, loading }
  //const contextValue = React.useMemo(() => ({ authInfo, loading }))

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
