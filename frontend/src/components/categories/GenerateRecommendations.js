import * as React from 'react'
import Title from '../Title'
import Modal from '../portals/Modal'
import { processColor } from '../../lib/helpers/hexToName'
import { useQuery, useQueryClient } from 'react-query'
import { findRoomById } from '../../lib/graphql/roomQueries'
import {
  getFurnitureCategories,
  getRecommendedCategories,
} from '../../lib/graphql/categoryQueries'
import { getMockAPISearch } from '../../lib/graphql/mockapiQueries'
import { roomSelector } from '../../lib/redux/roomSlice'
import { useSelector } from 'react-redux'

const GenerateRecommendations = ({ showModal, setShowModal, setResults }) => {
  const { roomInfo } = useSelector(roomSelector)
  const queryClient = useQueryClient()
  const roomQuery = useQuery(['room', { roomId: roomInfo.id }], findRoomById)
  const selectedCategories = useQuery(
    ['selectedCategories', { roomId: roomInfo.id }],
    getRecommendedCategories
  )

  React.useEffect(() => {
    setShowModal(true)
  }, [setShowModal])

  const sortedFurniture = roomQuery?.data?.furniture.sort((a, b) => {
    return a.category[0].rank - b.category[0].rank
  })
  const initialTerms = sortedFurniture.slice(0, 1).map(item => {
    return { color: item.color, style: item.categoryStyles[0].tag }
  })

  const colorAndStyle = initialTerms.map(term => {
    return { color: processColor(term.color).complimentary, style: term.style }
  })

  const searchTerms = selectedCategories.data.map(selected => {
    return { category: selected.category[0].name, ...colorAndStyle[0] }
  })

  console.log(searchTerms)

  searchTerms.map(async (term, i) => {
    try {
      const name = term.category
      await queryClient
        .fetchQuery(
          [
            'amazon-search',
            { term: `${term.category} ${term.color} ${term.style}` },
          ],
          getMockAPISearch
        )
        .then(function (res) {
          console.log('res', res)
          setResults(prevState => ({
            ...prevState,
            [name]: res.data,
          }))
        })
    } catch (error) {
      console.log(error)
    }
  })

  setTimeout(() => {
    setShowModal(false)
  }, 5000)

  return (
    <Modal className="generating-results" modalStatus={showModal}>
      <div className="background"></div>
      <div className="content">
        <Title type="h1">Generating Results</Title>
      </div>
    </Modal>
  )
}

export default GenerateRecommendations
