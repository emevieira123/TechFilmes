import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Analytics } from '@vercel/analytics/react'

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyle />
      <Analytics />
    </QueryClientProvider>
  </React.StrictMode>,
)
