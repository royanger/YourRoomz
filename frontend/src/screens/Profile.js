import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Loader from 'react-ts-loaders'
import { graphqlClient } from '../lib/graphql'
import { USERS_QUERY } from '../graphql/user'
import { axiosConfig as axios } from '../lib/axios'
import IntroText from '../components/IntroText'

const Profile = () => {
  const {
    loading,
    authInfo: { email, givenName, familyName, displayName },
  } = useAuth()

  // TODO testing, remove soon
  //   const [users, setUsers] = React.useState()
  //   React.useEffect(() => {
  //     console.log('testing gpl query')
  //     graphqlClient
  //       .query({
  //         query: USERS_QUERY,
  //       })
  //       .then(results => {
  //         console.log('results', results)
  //         setUsers(results.data.findUser)
  //       })
  //   }, [])

  return (
    <div className="container profile">
      {givenName || displayName ? (
        <h1>Hi, {givenName || displayName}</h1>
      ) : (
        <h1>Hi</h1>
      )}

      <Link to="/add-room">Add Room</Link>
    </div>
  )
}

export default Profile
