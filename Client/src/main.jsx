import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductContextProvider } from './Context/ProductContextProvider.jsx'
import { FilterContextProvider } from './Context/FilterContextProvider.jsx'
import { CartContextProvider } from './Context/CartContextProvider.jsx'
import { Auth0Provider } from '@auth0/auth0-react';




ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENT}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
    
    </FilterContextProvider>
    </ProductContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
