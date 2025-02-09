import React from 'react'
import DynamicBackground from './DynamicBackground'
import Header from './header/Header'
import MainBody from './MainBody/MainBody'
import FloatingNav from './FloatingNav'
import Footer from './MainBody/Footer'

function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
      <DynamicBackground />
      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-sm">
        <Header id="home" />
        <MainBody />
        <Footer />
        <FloatingNav />
      </div>
    </div>
  )
}

export default Home