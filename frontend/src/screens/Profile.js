import * as React from 'react'
import { Link } from 'react-router-dom'
import { graphqlClient } from '../lib/graphql'
import { USERS_QUERY } from '../graphql/user'
import { axiosConfig as axios } from '../lib/axios'

const Profile = () => {
  // TODO testing, remove soon
  const [users, setUsers] = React.useState()
  React.useEffect(() => {
    console.log('testing gpl query')
    graphqlClient
      .query({
        query: USERS_QUERY,
      })
      .then(results => {
        console.log('results', results)
        setUsers(results.data.findUser)
      })
  }, [])

  // TODO Also remove this after testing
  const [authCheck, setAuthCheck] = React.useState()
  React.useEffect(() => {
    try {
      const res = axios.get('/auth/authcheck')
      console.log('data', res)
      setAuthCheck(res?.user)
    } catch (error) {
      const data =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      console.log('error', data)
    }
  }, [])

  return (
    <>
      <div>Profile screen</div>
      <Link to="/add-room">Add Room</Link>
    </>
  )
}

export default Profile
