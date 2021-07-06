import { context } from '../schema/context.js'
import { processColor } from '../lib/hexToName.js'
import axios from 'axios'

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
    return { category: selected.category.name, ...colorAndStyle[0] }
  })

  let results = []

  await Promise.all(
    searchTerms.map(async (term, i) => {
      console.log(term.category)
      return await axios
        .get('https://60e48b415bcbca001749eab3.mockapi.io/search')
        .then(async function (res) {
          results = [
            ...results,
            { index: i, category: [term.category], results: res.data },
          ]
        })
    })
  ).then(function () {
    res.json(results)
  })
}

export default generateResults
