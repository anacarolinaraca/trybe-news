import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NewsProvider } from './context/NewsProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <NewsProvider>
        <App />
    </NewsProvider>
  </BrowserRouter>
)
