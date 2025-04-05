import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App'
import { HashRouter } from 'react-router'
import { Toaster } from '@/components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
    <Toaster />
  </HashRouter>
)
