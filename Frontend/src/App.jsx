import Login from './components/login/Login'
import Main from './components/profile/Main.jsx'

const App = () => {
  return (
    <div className='h-screen w-screen bg-linear-to-r from-purple-600 to-blue-500 text-white text-3xl font-bold flex items-center justify-center'>
      <Login/>
      {/* <Main/> */}
    </div>
  )
}

export default App
