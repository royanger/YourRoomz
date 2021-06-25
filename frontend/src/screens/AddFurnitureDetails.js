import * as React from 'react'
// import { useRoomContext } from '../lib/context/roomContext'
import { CATEGORY_QUERY, MATERIAL_QUERY } from '../graphql/category'
import { graphqlClient } from '../lib/graphql'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import CategoryList from '../components/addFurniture/CategoryList'
import SelectColor from '../components/addFurniture/SelectColor'
import SelectMaterial from '../components/addFurniture/SelectMaterial'

const AddFurnitureDetails = () => {
  // const { roomId, updateRoomInfo } = useRoomContext()

  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [material, setMaterial] = React.useState()
  const [categories, setCategories] = React.useState()
  const [category, setCategory] = React.useState({
    id: false,
    name: 'Please select a furniture category',
  })

  React.useEffect(() => {
    graphqlClient
      .query({
        query: CATEGORY_QUERY,
      })
      .then(results => {
        setCategories(results.data.getFurnitureCategories)
      })
  }, [])

  React.useEffect(() => {
    graphqlClient
      .query({
        query: MATERIAL_QUERY,
      })
      .then(results => {
        setMaterial(results.data.getFurnitureMaterial)
      })
  }, [])

  const handleSave = async e => {
    e.preventDefault()
    console.log('saving')
  }

  return (
    <>
      <Title type="h1">What pre-existing items do you have?</Title>

      <p>
        We'll show you pictures of items to pick from based on the criteria you
        provide
      </p>

      {categories && category ? (
        <CategoryList
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      ) : (
        ''
      )}

      <SelectColor />
      {material ? <SelectMaterial material={material} /> : ''}

      <Footer
        callback={handleSave}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </>
  )
}

export default AddFurnitureDetails
