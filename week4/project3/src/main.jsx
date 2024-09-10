import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Layout from './components/layout.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route index element={<App/>}></Route>
        </Routes>
    </Router>
  </StrictMode>
)
