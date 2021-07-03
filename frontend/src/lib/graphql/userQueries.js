import fetchData from './fetchData'

export async function findUsers() {
  const data = await fetchData(
    `query {
      findUsers {
         id, firstName, lastName, email
      }
   }`,
    { variables: {} }
  )
  return data?.findUsers
}
