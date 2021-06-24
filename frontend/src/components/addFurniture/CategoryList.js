import * as React from 'react'
import { Listbox } from '@headlessui/react'

const CategoryList = ({
  categories,
  category,

  updateCategory,
}) => {
  console.log('category', category)
  return (
    //  <p>tsdf</p>
    <Listbox value={category} onChange={updateCategory}>
      {console.log('cats', categories)}
      <Listbox.Button>{category.name} </Listbox.Button>
      <Listbox.Options>
        {categories.map(item => (
          <Listbox.Option
            key={item.id}
            value={item}
            // disabled={item.unavailable}
          >
            {item.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default CategoryList
