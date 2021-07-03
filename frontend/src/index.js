import * as React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from './lib/context/authContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'
import './styles.scss'

const root = document.getElementById('root')

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>,
  root
)
