import * as React from 'react'
import { Listbox } from '@headlessui/react'

const CategoryList = ({ categories, category, updateCategory }) => {
  return (
    <div className="add-furniture-form">
      <Listbox value={category} onChange={updateCategory}>
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
    </div>
  )
}

export default CategoryList
