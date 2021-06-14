import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gpl,
} from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
})

export { client as graphqlClient }
