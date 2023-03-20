import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import './styles/index.less'
import './styles/index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
