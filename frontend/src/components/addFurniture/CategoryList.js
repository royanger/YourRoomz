import * as React from 'react'
import { Listbox } from '@headlessui/react'

const ChevronDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
    >
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  )
}

const ChevronUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
    >
      <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
    </svg>
  )
}

const CategoryList = ({ categories, category, updateCategory }) => {
  return (
    <div className>
      <div className="form">
        <Listbox value={category} onChange={updateCategory}>
          {({ open }) => (
            <>
              <Listbox.Label>Furniture Type</Listbox.Label>
              <Listbox.Button>
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
