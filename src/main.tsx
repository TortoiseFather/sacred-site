import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'

import Home from './routes/Home'
import StepPage from './routes/StepPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps/:slug" element={<StepPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
