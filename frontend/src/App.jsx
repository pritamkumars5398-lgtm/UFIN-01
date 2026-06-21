import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Company from './pages/Company'
import Consultation from './pages/Consultation'
import Login from './pages/Login'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Login has its own minimal layout (no footer) */}
          <Route path="/login" element={<Login />} />

          {/* All other pages share the main Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/consultation" element={<Consultation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
