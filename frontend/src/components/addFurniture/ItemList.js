import * as React from 'react'
import IntroText from '../IntroText'
import { useRoomContext } from '../../lib/context/roomContext'
import { ROOM_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'

const ItemList = () => {
  const { roomInfo } = useRoomContext()

  const [furniture, setFurniture] = React.useState()

  React.useEffect(() => {
    if (roomInfo) {
      graphqlClient
        .query({
          query: ROOM_QUERY,
          variables: {
            id: roomInfo.id,
          },
        })
        .then(results => {
          setFurniture(results.data.findRoomById.furniture)
          console.log(results.data.findRoomById.furniture)
        })
    }
  }, [roomInfo])

  return (
    <>
      <div className="container existing-items">
        <div>
          <IntroText
            variant="text"
            heading="Your pre-existing items(s)"
            paragraph="Here is a list of pre-existing item(s)"
          />
        </div>
        <div className="">
          {furniture?.map(item => {
            return (
              <div key={item.id}>
                <ul>
                  <li>{item.id}</li>
                  <li>{item.category[0].name}</li>
                  <li>{item.color}</li>
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
