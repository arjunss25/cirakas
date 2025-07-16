import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import DescriptionSection from './pages/DescriptionSection'
import { useLenis } from './hooks/useLenis'
import GuidingPrinciples from './pages/GuidingPrinciples'
import Slider from './pages/Slider'
import ProductsShowcase from './pages/Products'
import TestimonialMarquee from './pages/TestimonialMarquee'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {
  useLenis()
  
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <About/>
      <DescriptionSection/>
      <GuidingPrinciples/>
      <Slider/>
      <ProductsShowcase/>
      <TestimonialMarquee/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App