import * as React from 'react'
import { useQuery } from 'react-query'
import { findRoomById } from '../../lib/graphql/roomQueries'
import { roomSelector } from '../../lib/redux/roomSlice'
import { useSelector } from 'react-redux'

const CurrentFurniture = () => {
  const { roomInfo } = useSelector(roomSelector)

  const { data, isFetching, error } = useQuery(
    ['room', { roomId: roomInfo.id }],
    findRoomById
  )

  if (data) {
    console.log(data)
  }

  return (
    <div className="current-furniture">
      {data?.furniture?.map(item => {
        return (
          <div key={item.id} className="furniture-item">
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
