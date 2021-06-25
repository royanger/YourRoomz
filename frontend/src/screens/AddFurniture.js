import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useRoomContext } from '../lib/context/roomContext'
import ItemList from '../components/addFurniture/ItemList'
import Footer from '../components/footer/Footer'
import { CATEGORY_QUERY } from '../graphql/category'
import { graphqlClient } from '../lib/graphql'
import CategoryList from '../components/addFurniture/CategoryList'

const AddFurniture = () => {
  const history = useHistory()
  const { updateNewFurniture } = useRoomContext()
  const [nextDisabled, setNextDisabled] = React.useState(true)
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
    if (category && category.id) {
      setNextDisabled(false)
    }
  }, [category])

  const updateCategory = e => {
    setCategory(e)
  }

  const handleSave = async e => {
    e.preventDefault()
    updateNewFurniture({ category: category.id })
    history.push('/add-furniture-details')
  }

  return (
    <>
      <ItemList />

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

      <Footer callback={handleSave} nextDisabled={nextDisabled} />
    </>
  )
}

export default AddFurniture
