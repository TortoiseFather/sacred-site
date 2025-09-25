import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Home from './routes/Home'
import StepPage from './routes/StepPage'
import StepExample from './routes/StepExample'   // <-- make sure this import exists

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps/:slug" element={<StepPage />} />
        <Route path="/steps/:stepSlug/examples/:exampleId" element={<StepExample />} /> {/* <-- NEW */}
      </Routes>
    </HashRouter>
  </StrictMode>
)
