import * as React from 'react'
import Title from '../Title'
import Modal from '../portals/Modal'
import { roomSelector } from '../../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'

const GenerateRecommendations = ({ showModal, setShowModal, setResults }) => {
  const { roomInfo } = useSelector(roomSelector)
  //   const [results, setResults] = React.useState()

  React.useEffect(() => {
    setShowModal(true)
  }, [setShowModal])

  const queriesCallback = React.useCallback(async room => {
    const { data } = await axios.get('http://localhost:5000/generateResults', {
      params: {
        roomId: room,
      },
    })

    if (data) {
      setResults(data)
    }
    return data
  }, [])

  React.useEffect(() => {
    setResults(queriesCallback(roomInfo.id))
  }, [queriesCallback, roomInfo.id, setResults])

  setTimeout(() => {
    setShowModal(false)
  }, 5000)

  return (
    <Modal className="generating-results" modalStatus={showModal}>
      {/* //  <Modal className="generating-results" modalStatus={true}> */}
      <div className="background"></div>
      <div className="content">
        <Title type="h1">Generating Results</Title>
      </div>
    </Modal>
  )
}

export default GenerateRecommendations
