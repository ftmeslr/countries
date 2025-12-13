import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './pages/shared/components/index.ts'
import { ThemeProvider } from './contexts/ThemeContext.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
