import * as React from 'react'
import { Listbox } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'

const SelectCategory = ({ results, handleClick, currentCategory }) => {
  return (
    <div>
      <div className="category-form">
        <Listbox value={currentCategory} onChange={handleClick}>
          {({ open }) => (
            <>
              <Listbox.Label>Furniture Type</Listbox.Label>
              <Listbox.Button className={open ? 'open' : 'closed'}>
                {results[currentCategory].category}
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Listbox.Button>
              <Listbox.Options>
                {results?.map(item => (
                  <Listbox.Option key={item.categoryId} value={item.index}>
                    {item.category}
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

export default SelectCategory
