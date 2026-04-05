import LoginPage from './components/login/LoginPage.jsx'
import Main from './components/profile/Main.jsx'
import Home from './components/home/Home.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterPage from './components/register/RegisterPage.jsx'
import ForgetPassword from './components/login/ForgotPasswordPage.jsx'

const App = () => {
  return (
    <div className='h-screen w-screen bg-linear-to-r from-purple-600 to-blue-500 text-white text-3xl font-bold flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/forget-password' element={<ForgetPassword/>}/>
          <Route path='/profile' element={<Main/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
