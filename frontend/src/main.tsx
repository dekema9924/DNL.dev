import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext.tsx'
import MenuContextProvider from './context/MenuContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </MenuContextProvider>
  </StrictMode>,
)
