import * as React from 'react'
import { ROOM_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'

const CurrentFurniture = () => {
  const [furniture, setFurniture] = React.useState()

  React.useEffect(() => {
    graphqlClient
      .query({
        query: ROOM_QUERY,
        variables: {
          roomId: '4e0c7105-ab57-4351-90cd-d02992b24ada',
        },
      })
      .then(results => {
        setFurniture(results.data.findRoomById.furniture)
      })
  }, [])

  return (
    <div className="current-furniture">
      {furniture?.map(item => {
        return (
          <div key={item.id} className="furniture-item">
            {console.log(item)}
            {item.category[0].name}
            <br />
            Image to come
          </div>
        )
      })}
    </div>
  )
}

export default CurrentFurniture
