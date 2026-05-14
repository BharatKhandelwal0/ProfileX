import React from 'react'
import RegisterPage from './RegisterPage.jsx'
import blueClouds from "../../assets/blueClouds.jpeg"
import Info from './Info.jsx'
import stone from "../../assets/volcano.jpeg"


const RegInfo = () => {
  return (
        <div className="min-h-screen w-screen flex items-center justify-evenly bg-linear-to-br from-slate-900 via-gray-900 to-black px-4 py-5">
            <img className="absolute inset-0 w-full h-full object-cover" src={stone} />

            <RegisterPage/>
            <Info/>
          </div>

    

  )
}

export default RegInfo