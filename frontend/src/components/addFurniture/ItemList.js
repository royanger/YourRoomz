import * as React from 'react'
import Title from '../Title'
import { useSelector } from 'react-redux'
import { roomSelector } from '../../lib/redux/roomSlice'
import { ROOM_QUERY } from '../../lib/graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'
import ExistingItemRow from './ExistingItemRow'

const ItemList = () => {
  const { roomInfo } = useSelector(roomSelector)
  const [furniture, setFurniture] = React.useState()

  React.useEffect(() => {
    if (roomInfo) {
      graphqlClient
        .query({
          query: ROOM_QUERY,
          variables: {
            roomId: roomInfo.id,
          },
        })
        .then(results => {
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
        <div className="list">
          {furniture?.map(item => {
            return <ExistingItemRow key={item.id} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default ItemList
