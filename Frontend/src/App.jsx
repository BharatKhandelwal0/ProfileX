import LoginPage from './components/login/LoginPage.jsx'
import Main from './components/profile/Main.jsx'
import Home from './components/home/Home.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterPage from './components/register/RegisterPage.jsx'
import ForgetPassword from './components/login/ForgetPassword.jsx'
import EnterOtp from './components/login/EnterOtp.jsx'
import ProtectedRoute from './components/verification/ProtectedRoute.jsx'
import UpdatePassword from './components/login/UpdatePassword.jsx'
import Info from './components/register/Info.jsx'
import RegInfo from './components/register/RegInfo.jsx'

const App = () => {
  return (
    <div className='w-full bg-linear-to-r from-black to-slate-900 text-white text-3xl font-bold flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/forget-password' element={<ForgetPassword/>}/>
          <Route path='/enterOtp' element={<EnterOtp/>}/>
          <Route path='/profile' element={
            <ProtectedRoute>
            <Main/>
            </ProtectedRoute>
            } />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/profile' element={<Main/>} />
          <Route path='/update-password' element={<UpdatePassword/>} />
          <Route path='/info' element={<Info/>} />
          <Route path='/reginfo' element={<RegInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
