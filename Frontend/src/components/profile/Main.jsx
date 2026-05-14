import React, { useEffect } from 'react'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {

    const getDashboardData = async ()=>{
     try {
       const res = await fetch("http://localhost:1100/user/dashboard",{
       method : "GET",
       credentials: "include"
      })
 
      const data = await res.json()
      console.log(data);
  
      if(!res.ok){
        alert("Failed to fetch dashboard data or Sesion expired. Please login again.");
        navigate('/login')
        return
      }
  
      if(res.ok){
        console.log("Dashboard data fetched successfully");
      }
     } catch (error) {
        console.error("Error fetching dashboard data:", error);
        alert("Error fetching dashboard data");
      }
    } 
    getDashboardData()
  }, [])
  

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