const Footer = () => {
  return (
    <footer
      id='contact'
      className='border-t border-slate-800 mt-10'
    >

      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10'>

        <div>
          <h1 className='text-3xl font-bold'>
            Bharat<span className='text-purple-500'>Dev</span>
          </h1>

          <p className='text-slate-400 mt-5 text-2xl leading-9 font-medium'>
            Building modern web applications with clean UI and scalable systems.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-5'>
            Quick Links
          </h2>

          <div className='flex flex-col gap-4 text-slate-400'>
            <a href="#home" className='hover:text-white transition'>Home</a>
            <a href="#about" className='hover:text-white transition'>About</a>
            <a href="#products" className='hover:text-white transition'>Products</a>
          </div>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-5'>
            Connect
          </h2>

          <div className='flex gap-5'>

            <a href='https://github.com'>
              <img
                className='h-10 hover:scale-110 transition'
                src='https://www.svgrepo.com/show/303615/github-icon-1-logo.svg'
                alt='github'
              />
            </a>

            <a href='https://linkedin.com'>
              <img
                className='h-10 hover:scale-110 transition'
                src='https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg'
                alt='linkedin'
              />
            </a>

            <a href='https://instagram.com'>
              <img
                className='h-10 hover:scale-110 transition'
                src='https://static.vecteezy.com/system/resources/thumbnails/018/930/413/small/instagram-logo-instagram-icon-transparent-free-png.png'
                alt='instagram'
              />
            </a>

          </div>
        </div>

      </div>

      <div className='border-t border-slate-800 py-6 text-center text-slate-500 text-sm'>
        © 2026 BharatDev. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer