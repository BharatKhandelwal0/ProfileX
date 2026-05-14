import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const checkAuth = async()=>{
            try {
                const res = await fetch('http://localhost:1100/user/auth/check',{
                    method : "GET",
                    credentials : "include" 
                })
        
                if(res.ok){
                    setIsAuth(true)
                }else{
                    setIsAuth(false)
                }
            }catch (error) {
                console.log(error.message);
                setIsAuth(false)
            } finally{
                setLoading(false)
            }
        }
        checkAuth()
    }, [])
    
    if(loading){
        return(
            <div>
                Loading....
            </div>
        )
    }
    if(!isAuth){
        return <Navigate to='/login' replace/>
    }

   return children
}

export default ProtectedRoute
