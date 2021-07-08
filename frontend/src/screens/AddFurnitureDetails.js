import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateNewFurniture } from '../lib/redux/roomSlice'
import { useQuery } from 'react-query'
import { getFurnitureCategories } from '../lib/graphql/categoryQueries'
import Title from '../components/Title'
import Footer from '../components/footer/Footer'
import CategoryList from '../components/addFurniture/CategoryList'
import SelectColor from '../components/addFurniture/SelectColor'
import SelectMaterial from '../components/addFurniture/SelectMaterial'
import Loader from 'react-ts-loaders'

const AddFurnitureDetails = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [nextDisabled, setNextDisabled] = React.useState(true)
  //   const [categorySelected, setCategorySelected] = React.useState(false)
  const [material, setMaterial] = React.useState()
  const [color, setColor] = React.useState()
  const [category, setCategory] = React.useState({
    id: false,
    name: 'Please select a furniture type',
  })

  const categories = useQuery(['categories'], getFurnitureCategories)

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

    dispatch(
      updateNewFurniture({
        color: color,
        materialId: material,
        categoryId: category.id,
      })
    )
    history.push('/add-furniture-comparison')
  }

  if (categories.isLoading) {
    return <Loader type="ellipsis" size={200} color="var(--warning)" />
  }

  if (categories.error) {
    return 'There was an error fetching information from the database'
  }

  return (
    <div className="container addfurniture">
      <Title type="h1">What pre-existing items do you have?</Title>

      <p>
        We'll show you pictures of items to pick from based on the criteria you
        provide
      </p>

      <div
        className={`form-container ${category.id !== false ? 'active' : ''}`}
      >
        {categories && category ? (
          <CategoryList
            categories={categories.data}
            category={category}
            updateCategory={updateCategory}
          />
        ) : (
          ''
        )}
      </div>

      {category.id !== false ? (
        <>
          <SelectColor
            callback={updateColor}
            title="Color"
            handleColorPicker={updateColor}
            color={color}
          />

          <SelectMaterial
            materialList={category.relatedMaterial}
            updateMaterial={updateMaterial}
            material={material}
          />
        </>
      ) : (
        ''
      )}

      <Footer
        callback={handleSave}
        nextDisabled={nextDisabled}
        prev="/add-room-details"
      />
    </div>
  )
}

export default AddFurnitureDetails
