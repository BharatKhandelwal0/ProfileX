const Login = () => {
  return (
    <div className='h-[50%] w-[50%] bg-white  text-black text-3xl font-bold flex flex-col items-center justify-center rounded-md shadow-lg'>
        <h1 className='mb-10 text-5xl '>Login</h1>
      <form className='flex flex-col gap-4 w-[70%]'>
        <input type="text" placeholder='Name' name='name' className='p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-slate-600'/>
        <input type="email" placeholder='Email' name='email' className='p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-slate-600'/>
        <input type="password" placeholder='Password' name='password' className='p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-slate-600'/>
        <button type='submit' className='bg-linear-to-r from-purple-700 to-blue-600 cursor-pointer text-white font-bold py-2 px-4 rounded-md'>Login</button>
      </form>
      <a href="/register" className='text-black mt-7 text-xl'>Don't have an account? <span className='underline text-blue-800  hover:text-blue-900'>Register</span></a>
    </div>
  )
}

export default Login