import * as React from 'react'
import { Listbox } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'

const SelectPriceRange = ({ priceRange, setPriceRange, handleClick }) => {
  const priceRanges = [
    { name: '$', id: 'price1' },
    { name: '$$', id: 'price2' },
    { name: '$$$', id: 'price3' },
    { name: '$$$$', id: 'price4' },
    { name: 'All prices', id: 'any' },
  ]
  return (
    <div>
      <div className="price-form">
        <Listbox value={priceRange} onChange={handleClick}>
          {({ open }) => (
            <>
              <Listbox.Label>Furniture Type</Listbox.Label>
              <Listbox.Button className={open ? 'open' : 'closed'}>
                {priceRanges[priceRange].name}
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Listbox.Button>
              <Listbox.Options>
                {priceRanges?.map((price, i) => (
                  <Listbox.Option key={price.id} value={i}>
                    {price.name}
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

export default SelectPriceRange
