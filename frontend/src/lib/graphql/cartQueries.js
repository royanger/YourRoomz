import fetchData from './fetchData'

export async function getCart(key) {
  const { userId } = key.queryKey[1]

  const data = await fetchData(
    `query getCart($userId: String!) {
      getCart( userId: $userId)
      {
        id,
         cartItems {
          id
          name
          price
          rating
          rating_total
          link
          image
        }
      }

   }`,
    { variables: { userId } }
  )
  return data?.getCart
}

export async function createCartItem({
  cartId,
  name,
  price,
  rating,
  rating_total,
  link,
  image,
}) {
  const data = await fetchData(
    `mutation($cartId: String!, $name: String!, $price: Float!, $rating: Float!, $rating_total: Float!, $link: String!, $image: String! ) {
         createCartItem(cartId: $cartId, name: $name, price: $price, rating: $rating, rating_total: $rating_total, link: $link, image: $image, ) {id}
       }
      `,
    { variables: { cartId, name, price, rating, rating_total, link, image } }
  )
  return data?.createCartItem
}

export async function deleteCartItem({ id }) {
  const data = await fetchData(
    `mutation($id: String!) {
         deleteCartItem(id: $id) {id}
       }
      `,
    { variables: id }
  )
  return data?.deleteCartItem
}
