import React from 'react'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='min-h-screen w-screen bg-linear-to-br from-purple-950 via-slate-900 to-black flex items-center justify-center p-4'>
      <div className='w-full max-w-6xl bg-slate-950/90 backdrop-blur-md text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-800'>
        <Header />
        <Middle />
        <Footer />
      </div>
    </div>
  )
}

export default Main