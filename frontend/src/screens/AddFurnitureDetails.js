import * as React from 'react'
//import { useRoomContext } from '../lib/context/roomContext'
import ItemComparison from '../components/addFurniture/ItemComparison'
import Footer from '../components/footer/Footer'

const AddFurnitureDetails = () => {
  //   const { roomId, selectRoom } = useRoomContext()

  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const handleSave = async e => {
    e.preventDefault()
    console.log('saving')
  }

  return (
    <>
      <ItemComparison />

      <Footer
        callback={handleSave}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddFurnitureDetails
