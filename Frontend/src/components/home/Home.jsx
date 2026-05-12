import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

const Home = () => {
  return (
    <div className='w-screen min-h-screen  bg-linear-to-br from-black via-slate-950 to-purple-950 text-white'>
      <Navbar />
      <Hero />
      <About /> 
      <Products />
      <CTA /> 
      <Footer />
    </div>
  )
}

export default Home