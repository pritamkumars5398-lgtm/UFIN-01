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
import Reviews from './pages/Reviews'
import ReviewDetail from './pages/ReviewDetail'
import Partners from './pages/Partners'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Vacancies from './pages/Vacancies'
import Guarantees from './pages/Guarantees'
import Equipment from './pages/Equipment'
import Instructions from './pages/Instructions'
import Updates from './pages/Updates'
import UserAgreement from './pages/UserAgreement'
import PrivacyPolicy from './pages/PrivacyPolicy'
import People from './pages/People'
import PeopleDetail from './pages/PeopleDetail'
import PeopleTariffs from './pages/PeopleTariffs'
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

            {/* Company section */}
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/reviews/:slug" element={<ReviewDetail/>} />
            <Route path="/partners" element={<Partners/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/news/:slug" element={<NewsArticle/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<BlogArticle/>} />
            <Route path="/vacancies" element={<Vacancies/>} />
            <Route path="/guarantees" element={<Guarantees/>} />

            {/* Resources section */}
            <Route path="/resources/equipment" element={<Equipment/>} />
            <Route path="/resources/instructions" element={<Instructions/>} />
            <Route path="/resources/updates" element={<Updates/>} />
            <Route path="/resources/user-agreement" element={<UserAgreement/>} />
            <Route path="/resources/privacy-policy" element={<PrivacyPolicy/>} />

            {/* People (B2C) section */}
            <Route path="/people" element={<People/>} />
            <Route path="/people/tariffs" element={<PeopleTariffs/>} />
            <Route path="/people/:slug" element={<PeopleDetail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
