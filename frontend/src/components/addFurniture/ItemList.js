import * as React from 'react'
import Title from '../Title'
import { useRoomContext } from '../../lib/context/roomContext'
import { ROOM_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'

const ItemList = () => {
  const { roomInfo } = useRoomContext()

  const [furniture, setFurniture] = React.useState()

  React.useEffect(() => {
    if (roomInfo) {
      console.log('room id', roomInfo.id)
      graphqlClient
        .query({
          query: ROOM_QUERY,
          variables: {
            roomId: roomInfo.id,
          },
        })
        .then(results => {
          console.log(results.data.findRoomById)
          setFurniture(results.data.findRoomById.furniture)
        })
    }
  }, [roomInfo])

  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Your pre-existing items(s)</Title>

          <p>Here is a list of pre-existing items</p>
        </div>
        <div className="">
          {furniture?.map(item => {
            return (
              <div key={item.id}>
                <ul>
                  <li>{item.id}</li>
                  <li>{item.category[0].name}</li>
                  <li>{item.color}</li>
                  <li>{item.material[0].name}</li>
                </ul>
                <br />
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ItemList
