import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='w-full border-b cursor-default border-slate-800 backdrop-blur-md sticky top-0 z-50 bg-black/30'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-5'>

        <h1 className='text-2xl md:text-3xl font-semibold'>
          Bharat<span className='text-purple-500'>Dev</span>
        </h1>

        <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
          <a href="#home" className='hover:text-purple-400 transition'>Home</a>
          <a href="#about" className='hover:text-purple-400 transition'>About</a>
          <a href="#products" className='hover:text-purple-400 transition'>Products</a>
          <a href="#contact" className='hover:text-purple-400 transition'>Contact</a>
        </div>

        <div className='flex gap-7'>
        <Link to='/login'>
          <button className='px-10 py-2 font-semibold tracking-wide rounded-lg cursor-pointer bg-purple-950/70 border border-purple-500 hover:bg-purple-700 transition'>
          Login
        </button>
        </Link>
        <Link to='/register'>
          <button className='px-10 py-2 font-semibold tracking-wide rounded-lg cursor-pointer bg-purple-950/70 border border-purple-500 hover:bg-purple-700 transition'>
          Register
        </button>
        </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar