import React from 'react'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='h-[80%] w-[70%] bg-purple-950 text-white text-3xl font-bold rounded-md shadow-lg'>
        <Header/>
        <Middle/>
        <Footer/>
      
    </div>
  )
}

export default Main
