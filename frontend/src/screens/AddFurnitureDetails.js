import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useRoomContext } from '../lib/context/roomContext'
import { CATEGORY_QUERY, MATERIAL_QUERY } from '../graphql/category'
import { CREATE_FURNITURE } from '../graphql/furniture'
import { graphqlClient } from '../lib/graphql'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import CategoryList from '../components/addFurniture/CategoryList'
import SelectColor from '../components/addFurniture/SelectColor'
import SelectMaterial from '../components/addFurniture/SelectMaterial'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const { roomId, roomInfo, updateRoomInfo } = useRoomContext()

  const [backDisabled, setBackDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)
  const [materialList, setMaterialList] = React.useState()
  const [material, setMaterial] = React.useState()
  const [color, setColor] = React.useState()
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
        setMaterialList(results.data.getFurnitureMaterial)
      })
  }, [])

  React.useEffect(() => {
    if (category.id && color && material) {
      setNextDisabled(false)
    }
  }, [color, material, category])

  const updateCategory = e => {
    setCategory(e)
  }

  const updateColor = e => {
    setColor(e.target.id)
  }

  const updateMaterial = e => {
    setMaterial(e.target.id)
  }

  const handleSave = async e => {
    e.preventDefault()
    console.log('room', roomInfo.id)
    console.log('color', color)
    console.log('material', material)
    console.log('category', category.id)
    graphqlClient
      .mutate({
        mutation: CREATE_FURNITURE,
        variables: {
          roomId: roomInfo.id,
          color: color,
          materialId: material,
          categoryId: category.id,
          styleId: '8242700c-c6d3-4ab9-8dff-b8f755045cfb',
        },
      })
      .then(results => {
        console.log('results', results)
        history.push('/add-furniture-comparison')
      })
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
          updateCategory={updateCategory}
        />
      ) : (
        ''
      )}

      <SelectColor callback={updateColor} />

      {materialList ? (
        <SelectMaterial
          materialList={materialList}
          updateMaterial={updateMaterial}
        />
      ) : (
        ''
      )}

      <Footer
        callback={handleSave}
        nextDisabled={nextDisabled}
        prev="/add-room-details"
      />
    </>
  )
}

export default AddFurnitureDetails
