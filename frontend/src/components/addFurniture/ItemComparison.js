import * as React from 'react'
import { GET_CATEGORY_STYLES } from '../../graphql/furniture'
import { graphqlClient } from '../../lib/graphql'
import { useRoomContext } from '../../lib/context/roomContext'
import SimilarItem from './SimilarItem'

const ItemComparison = ({ handleClick }) => {
  const [categoryStyles, setCategoryStyles] = React.useState()
  const { newFurniture } = useRoomContext()

  React.useEffect(() => {
    graphqlClient
      .query({
        query: GET_CATEGORY_STYLES,
        variables: {
          categoryId: newFurniture,
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
