import * as React from 'react'
import Modal from '../portals/Modal'
import { roomSelector } from '../../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from 'react-ts-loaders'
import { useHistory } from 'react-router-dom'

const GenerateRecommendations = ({ showModal, setShowModal, setResults }) => {
  const { roomInfo } = useSelector(roomSelector)
  const history = useHistory()

  if (!roomInfo || !roomInfo.id) {
    history.push('/profile')
  }

  React.useEffect(() => {
    setShowModal(true)
  }, [setShowModal])

  const queriesCallback = React.useCallback(async room => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URI}/generateResults`,
      {
        params: {
          roomId: room,
        },
      }
    )

    if (data) {
      setResults(data)
    }
    return data
    // TODO Try and sort this out
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    setResults(queriesCallback(roomInfo?.id))
  }, [queriesCallback, roomInfo?.id, setResults])

  setTimeout(() => {
    setShowModal(false)
  }, 10000)

  return (
    <Modal className="generating-results" modalStatus={showModal}>
      {/* //  <Modal className="generating-results" modalStatus={true}> */}
      <div className="background"></div>
      <div className="content">
        <Loader
          type="ellipsis"
          color="var(--brand-accent)"
          className="loader"
        />
        <p>We are working on your recommendations</p>
      </div>
    </Modal>
  )
}

export default GenerateRecommendations
