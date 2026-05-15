import React, { useEffect } from 'react'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Main = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    const getDashboardData = async ()=>{
     try {
       const res = await fetch("http://localhost:1100/user/dashboard",{
       method : "GET",
       credentials: "include"
      })
 
      const data = await res.json()
      setUser(data)
  
      if(!res.ok){
        alert("Failed to fetch dashboard data or Sesion expired. Please login again.");
        navigate('/login')
        return
      }
  
      if(res.ok){
        console.log("Dashboard Data Fetched Successfully");
      }
     } catch (error) {
        console.log("Error fetching dashboard data:", error.message);
        alert("Error fetching dashboard data");
      }
    } 
    getDashboardData()
  }, [])
  

  return (
    <div className='min-h-screen w-screen bg-linear-to-br from-purple-950 via-slate-900 to-black flex items-center justify-center p-4'>
      <div className='w-full max-w-6xl bg-slate-950/90 backdrop-blur-md text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-800'>
        <Header firstName={user?.data.firstName} lastName={user?.data.lastName} email={user?.data.email} role={user?.data.role} image={user?.data.image} bio={user?.data.bio} tags={user?.data.tags} skills={user?.data.skills} about={user?.data.about} />
        <Middle firstName={user?.data.firstName} lastName={user?.data.lastName} email={user?.data.email} role={user?.data.role} image={user?.data.image} bio={user?.data.bio} tags={user?.data.tags} skills={user?.data.skills} about={user?.data.about} />
        <Footer firstName={user?.data.firstName} lastName={user?.data.lastName} email={user?.data.email} role={user?.data.role} image={user?.data.image} bio={user?.data.bio} tags={user?.data.tags} skills={user?.data.skills} about={user?.data.about}/>
      </div>
    </div>
  )
}

export default Main