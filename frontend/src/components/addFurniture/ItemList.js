import * as React from 'react'
import Title from '../Title'
import { useRoomContext } from '../../lib/context/roomContext'
import { ROOM_QUERY } from '../../graphql/room-queries'
import { CATEGORY_QUERY } from '../../graphql/category'
import { graphqlClient } from '../../lib/graphql'
import CategoryList from './CategoryList'

const ItemList = () => {
  const { roomInfo } = useRoomContext()
  const [categories, setCategories] = React.useState()
  const [category, setCategory] = React.useState({
    id: false,
    name: 'Please select a furniture category',
  })
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

  React.useEffect(() => {
    graphqlClient
      .query({
        query: CATEGORY_QUERY,
      })
      .then(results => {
        setCategories(results.data.getFurnitureCategories)
      })
  }, [])

  React.useEffect(() => {
    if (category && category.id) {
      console.log('CORRECT CAT PICKED')
    }
  }, [category])

  const updateCategory = e => {
    setCategory(e)
  }

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

          {categories && category ? (
            <CategoryList
              categories={categories}
              category={category}
              setCategory={setCategory}
              updateCategory={updateCategory}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default ItemList
