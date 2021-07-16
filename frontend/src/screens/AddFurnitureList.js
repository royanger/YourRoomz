import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roomSelector } from '../lib/redux/roomSlice'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { findRoomById } from '../lib/graphql/roomQueries'
import { deleteFurniture } from '../lib/graphql/furnitureQueries'
import ExistingItemRow from '../components/addFurniture/ExistingItemRow'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import Loader from 'react-ts-loaders'

const AddFurnitureList = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const { roomInfo } = useSelector(roomSelector)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  if (!roomInfo || !roomInfo.id) {
    history.push('/profile')
  }

  const roomQuery = useQuery(['room', { roomId: roomInfo?.id }], findRoomById)

  React.useEffect(() => {
    if (
      roomQuery &&
      roomQuery.data &&
      roomQuery.data.furniture &&
      roomQuery.data.furniture.length > 0
    ) {
      setNextDisabled(false)
    }
  }, [roomQuery])

  const deleteFurnitureMutation = useMutation(deleteFurniture, {
    onMutate: async values => {
      await queryClient.cancelQueries(['room', { roomId: roomInfo.id }])

      const previousFurniture = queryClient.getQueryData([
        ['room', { roomId: roomInfo.id }],
        { roomId: roomInfo.id },
      ])

      queryClient.setQueryData(['room', { roomId: roomInfo.id }], old => {
        const filtered = old.furniture.filter(function (item) {
          return item.id !== values.id
        })
        return { ...old, furniture: [...filtered] }
      })

      return previousFurniture
    },
    onError: (error, values, context) => {
      console.log('error', error)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['room', { roomId: roomInfo.id }])
    },
  })

  const callback = () => {
    history.push('/category-recommendations')
  }

  const handleDelete = id => {
    deleteFurnitureMutation.mutate({
      id: id,
    })
  }

  if (roomQuery.isLoading)
    return <Loader type="ellipsis" size={200} color="var(--brand-accent)" />
  if (roomQuery.error) return 'There was was error loading your furniture list'

  const sortedFurniture = roomQuery.data.furniture.sort((a, b) => {
    return a.category[0].rank - b.category[0].rank
  })

  return (
    <>
      <div className="container existing-items">
        <div className="titles">
          <Title type="h1">Your pre-existing items(s)</Title>

          <p>Here is a list of your pre-existing items</p>
        </div>

        <div className="list">
          <div className="header">
            <div>Furniture Type</div>
            <div>Color</div>
            <div>Material</div>
            <div>Style</div>
            <div>Action</div>
          </div>
          <div className="items-container">
            <div className="items">
              {sortedFurniture?.map(item => {
                return (
                  <ExistingItemRow
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <Footer
          nextDisabled={nextDisabled}
          callback={callback}
          furnitureList={true}
          prev="/add-furniture-list"
        />
      </div>
    </>
  )
}

export default AddFurnitureList
