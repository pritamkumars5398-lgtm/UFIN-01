import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterButton from './FooterButton'
import LanguageToggle from './LanguageToggle'

export default function Layout({ children }){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <FooterButton/>
      <LanguageToggle />
    </div>
  )
}
