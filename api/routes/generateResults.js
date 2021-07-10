import { context } from '../schema/context.js'
import { processColor } from '../lib/hexToName.js'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const generateResults = async (req, res) => {
  console.log('generating results', req.query.roomId)

  const selectedCategories =
    await context.prisma.recommendedCategories.findMany({
      where: {
        roomId: req.query.roomId,
      },
      include: {
        category: true,
      },
    })

  const furnitureQuery = await context.prisma.furniture.findMany({
    where: {
      roomId: req.query.roomId,
    },
    include: {
      category: true,

      categorystyle: true,
    },
  })

  const sortedFurniture = furnitureQuery.sort((a, b) => {
    return a.category.rank - b.category.rank
  })
  const initialTerms = sortedFurniture.slice(0, 1).map(item => {
    return { color: item.color, style: item.categorystyle.tag }
  })
  const colorAndStyle = initialTerms.map(term => {
    return {
      color: processColor(term.color).complimentary,
      style: term.style,
    }
  })
  const searchTerms = selectedCategories.map(selected => {
    return {
      category: selected.category.name,
      id: selected.category.id,
      price1: selected.category.pricerange1,
      price2: selected.category.pricerange2,
      price3: selected.category.pricerange3,
      price4: selected.category.pricerange4,
      ...colorAndStyle[0],
    }
  })

  let results = []

  await Promise.all(
    searchTerms.map(async (term, i) => {
      const params = {
        api_key: process.env.RAINFOREST_API_KEY,
        type: 'search',
        amazon_domain: 'amazon.com',
        search_term: `${term.style} ${term.color} ${term.category}`,
        sort_by: 'featured',
      }
      // console.log('params', params)

      return await axios
        .get('https://60e48b415bcbca001749eab3.mockapi.io/search2')
        //   .get('https://api.rainforestapi.com/request', { params })
        .then(async function (res) {
          const filtered = res.data.filter(result => {
            return result.price
          })

          results = [
            ...results,
            {
              index: i,
              category: term.category,
              categoryId: term.id,
              price1: term.price1,
              price2: term.price2,
              price3: term.price3,
              price4: term.price4,
              data: filtered,
            },
          ]
        })
        .catch(error => {
          console.log('error', error)
        })
    })
  ).then(function () {
    res.json(results)
  })
}

export default generateResults
