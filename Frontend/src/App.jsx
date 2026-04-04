import Login from './components/login/Login'
import Main from './components/profile/Main.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/register/Register.jsx'

const App = () => {
  return (
    <div className='h-screen w-screen bg-linear-to-r from-purple-600 to-blue-500 text-white text-3xl font-bold flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Main/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


{/* <div className='h-screen w-screen bg-linear-to-r from-purple-600 to-blue-500 text-white text-3xl font-bold flex items-center justify-center'>
      <Login/>
      {/* <Main/> */}
    // </div> */}