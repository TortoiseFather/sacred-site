import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import './styles/globals.css'
import About from './routes/About'
import Papers from './routes/Papers'
import Contact from './routes/Contact'
import Home from './routes/Home'
import StepPage from './routes/StepPage'
import StepExample from './routes/StepExample'
import CitationProvider from './components/CitationProvider'
import RefProvider from './components/RefProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <CitationProvider>
        <RefProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/steps/:slug" element={<StepPage />} />
            <Route path="/steps/:stepSlug/examples/:exampleId" element={<StepExample />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/papers" element={<Papers />} />
          </Routes>
        </RefProvider>
      </CitationProvider>
    </HashRouter>
  </StrictMode>
)
