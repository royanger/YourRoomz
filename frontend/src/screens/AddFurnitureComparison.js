import * as React from 'react'
import ItemComparison from '../components/addFurniture/ItemComparison'
import Footer from '../components/footer/Footer'
import Title from '../components/Title'
import { useHistory } from 'react-router-dom'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [, setSelectedStyle] = React.useState()

  const handleClick = e => {
    setSelectedStyle(e.target.id)
    setNextDisabled(false)
  }

  const handleSave = () => {
    history.push('/add-furniture-list')
  }

  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Choose similar pre-existing items</Title>

          <p>Choose the item that looks similar to what you have.</p>
        </div>
        <ItemComparison handleClick={handleClick} />

        <Footer callback={handleSave} nextDisabled={nextDisabled} />
      </div>
    </>
  )
}

export default AddFurnitureDetails
