import * as React from 'react'
import { GET_CATEGORY_STYLES } from '../../lib/graphql/furniture'
import { graphqlClient } from '../../lib/graphql'
import { useSelector } from 'react-redux'
import { roomSelector } from '../../lib/redux/roomSlice'
import SimilarItem from './SimilarItem'

const ItemComparison = ({ handleClick }) => {
  const [categoryStyles, setCategoryStyles] = React.useState()
  const { roomInfo } = useSelector(roomSelector)

  React.useEffect(() => {
    graphqlClient
      .query({
        query: GET_CATEGORY_STYLES,
        variables: {
          categoryId: roomInfo.newFurnitureId,
        },
      })
      .then(results => {
        setCategoryStyles(results.data.getCategoryStyles)
      })
  })

  return (
    <>
      <div className="comparison">
        {categoryStyles?.map(style => {
          return <SimilarItem categoryStyle={style} handleClick={handleClick} />
        })}
      </div>
    </>
  )
}

export default ItemComparison
