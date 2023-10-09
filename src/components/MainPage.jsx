import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Card from './Card'
import Feature from './Feature'
import Gallery from './Gallery'
import Faq from './Faq'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Card/>
      <Feature/>
      <Gallery/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default MainPage
