import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

//The BrowserRouter component in React Router DOM is used to wrap your React application and enable routing using the browser's history API. It keeps your UI in sync with the URL and allows for navigation between different components/pages without reloading the browser.

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
