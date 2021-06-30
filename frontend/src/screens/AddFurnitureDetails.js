import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { roomSelector, updateNewFurniture } from '../lib/redux/roomSlice'
import { CATEGORY_QUERY, MATERIAL_QUERY } from '../lib/graphql/category'
import { QueryClient, useMutation } from 'react-query'
import { createFurnitureMutation } from '../lib/react-query/furnitureQueries'
import { graphqlClient } from '../lib/graphql'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import CategoryList from '../components/addFurniture/CategoryList'
import SelectColor from '../components/addFurniture/SelectColor'
import SelectMaterial from '../components/addFurniture/SelectMaterial'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const queryClient = new QueryClient()
  const { roomInfo } = useSelector(roomSelector)
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

  const createFurniture = useMutation(createFurnitureMutation, {
    onSuccess: () => {
      console.log('FURNITURE ADDED')
      //   queryClient.invalidateQueries('')
      history.push('/add-furniture-comparison')
    },
  })

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

    createFurniture.mutate({
      roomId: roomInfo.id,
      color: color,
      materialId: material,
      categoryId: category.id,
      styleId: '8242700c-c6d3-4ab9-8dff-b8f755045cfb',
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
