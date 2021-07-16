import * as React from 'react'
import { Listbox } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'

const CategoryList = ({ categories, category, updateCategory }) => {
  return (
    <div className>
      <div className="form">
        <Listbox value={category} onChange={updateCategory}>
          {({ open }) => (
            <>
              <Listbox.Label>Furniture Type</Listbox.Label>
              <Listbox.Button className={open ? 'open' : 'closed'}>
                {category.name} {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Listbox.Button>
              <Listbox.Options>
                {categories.map(item => (
                  <Listbox.Option key={item.id} value={item}>
                    {item.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default CategoryList
