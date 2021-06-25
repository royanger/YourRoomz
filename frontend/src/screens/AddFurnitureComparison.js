import * as React from 'react'
// import { useRoomContext } from '../lib/context/roomContext'
import ItemDetails from '../components/addFurniture/ItemDetails'

import Footer from '../components/footer/Footer'

const AddFurnitureComparison = () => {
  // const { roomId, updateRoomInfo } = useRoomContext()

  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const handleSave = async e => {
    e.preventDefault()
    console.log('saving')
  }

  return (
    <>
      <ItemDetails />

      <Footer
        callback={handleSave}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddFurnitureComparison
