import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../routes/layout.jsx'
import DetailView from '../routes/detailView.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route index={true} path='/' element={<App />}/> */}
      <Route path='/' element={<Layout/>}>
        <Route index={true} element={<App/>}/>
        <Route index={false} path='coinDetails/:symbol' element={<DetailView/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    
)
