import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItemsContextProvider } from './context/ItemContext.jsx'
import AlertContextProvider from './context/alertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>,
)
