import * as React from 'react'
import { Link } from 'react-router-dom'
import { graphqlClient } from '../lib/graphql'
import { USERS_QUERY } from '../graphql/user'
import { axiosConfig as axios } from '../lib/axios'

const Profile = () => {
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
    <>
      <div>Profile screen</div>
      <Link to="/add-room">Add Room</Link>
    </>
  )
}

export default Profile
