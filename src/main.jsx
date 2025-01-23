import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./styles/globalStyle.js";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
)
