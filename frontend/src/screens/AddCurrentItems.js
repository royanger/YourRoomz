import * as React from 'react'
import { Link } from 'react-router-dom'
import { useRoomContext } from '../lib/context/roomContext'
import ItemList from '../components/addFurniture/ItemList'
import ItemDetails from '../components/addFurniture/ItemDetails'
import ItemComparison from '../components/addFurniture/ItemComparison'
import Footer from '../components/footer/Footer'

const AddCurrentItems = () => {
  const { roomId, selectRoom } = useRoomContext()
  const [step, setStep] = React.useState('list')
  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const handleSave = async e => {
    e.preventDefault()
    console.log('saving')
  }

  return (
    <>
      {step === 'list' ? <ItemList /> : ''}
      {step === 'details' ? <ItemDetails /> : ''}
      {step === 'compare' ? <ItemComparison /> : ''}

      <Footer
        callback={handleSave}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddCurrentItems
