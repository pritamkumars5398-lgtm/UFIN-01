import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Company from './pages/Company'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Resources from './pages/Resources'
import Consultation from './pages/Consultation'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services/:slug" element={<ServiceDetail/>} />
            <Route path="/solutions/:slug" element={<ServiceDetail/>} />
            <Route path="/company" element={<Company/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/consultation" element={<Consultation/>} />
            <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
