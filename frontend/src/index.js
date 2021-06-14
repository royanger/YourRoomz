import * as React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { graphqlClient } from './lib/graphql'
import App from './App'
import './styles.scss'

const root = document.getElementById('root')

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>,
  root
)
