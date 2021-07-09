import * as React from 'react'
import { Listbox } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'
import { priceRanges } from '../../lib/priceRanges.js'

const SelectPriceRange = ({ priceRange, setPriceRange, handleClick }) => {
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
