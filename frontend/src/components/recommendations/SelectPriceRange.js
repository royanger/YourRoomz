import * as React from 'react'
import { Listbox } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'
// import { priceRanges } from '../../lib/priceRanges.js'

const SelectPriceRange = ({
  priceRange,
  setPriceRange,
  handleClick,
  results,
  currentCategory,
}) => {
  const [priceRanges, setPriceRanges] = React.useState([])

  if (currentCategory > -1 && results[0] && priceRanges.length < 1) {
    const priceTest = [
      {
        name: `$${results[currentCategory].price1
          .split('-')
          .slice(0, 1)} - $${results[currentCategory].price1
          .split('-')
          .splice(1, 1)}`,
        id: 'price1',
      },
      {
        name: `$${results[currentCategory].price2
          .split('-')
          .slice(0, 1)} - $${results[currentCategory].price2
          .split('-')
          .splice(1, 1)}`,
        id: 'price2',
      },
      {
        name: `$${results[currentCategory].price3
          .split('-')
          .slice(0, 1)} - $${results[currentCategory].price3
          .split('-')
          .splice(1, 1)}`,
        id: 'price3',
      },
      {
        name: `$${results[currentCategory].price4
          .split('-')
          .slice(0, 1)} and above`,
        id: 'price4',
      },
      {
        name: 'Any Price',
        id: 'any',
      },
    ]

    setPriceRanges(priceTest)
  }
  return (
    <div>
      <div className="price-form">
        {currentCategory > -1 && priceRanges.length > 0 ? (
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
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default SelectPriceRange
