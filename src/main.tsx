import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import Home from './routes/Home'
import StepPage from './routes/StepPage'


const router = createBrowserRouter([
{ path: '/', element: <Home /> },
{ path: '/steps/:slug', element: <StepPage /> },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>,
)