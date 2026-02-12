import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// ローディング画面を非表示
const loading = document.getElementById('loading')
if (loading) {
  loading.style.display = 'none'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
