import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import flowStore from './redux/storeFlow/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ flowStore }>
      <App />
    </Provider>
  </StrictMode>,
)
