const About = () => {
  return (
    <section
      id='about'
      className='max-w-7xl mx-auto cursor-default px-6 py-20'
    >

      <div className='text-center mb-14'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          About Us
        </h1>

        <p className='text-slate-400 w-6xl font-semibold mt-5 max-w-7xl mx-auto leading-10'>
          I’m Bharat Khandelwal, a MERN stack developer passionate about building
          responsive web applications and scalable backend systems using React,
          Node.js, Express, MongoDB, and Tailwind CSS.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div className='bg-slate-900 border border-slate-800 p-8 rounded-2xl'>
          <h2 className='text-3xl font-bold mb-5'>MERN Stack</h2>

          <p className='text-slate-300 text-2xl leading-9 font-medium'>
            Building responsive frontend interfaces and scalable backend systems
            using modern MERN stack technologies.
          </p>
        </div>

        <div className='bg-slate-900 border border-slate-800 p-8 rounded-2xl'>
          <h2 className='text-3xl font-bold mb-5'>Problem Solving</h2>

          <p className='text-slate-300 text-2xl leading-9 font-medium'>
            Improving logical thinking and data structure skills through regular
            coding practice and real-world project development.
          </p>
        </div>

        <div className='bg-slate-900 border border-slate-800 p-8 rounded-2xl'>
          <h2 className='text-3xl font-bold mb-5'>Continuous Learning</h2>

          <p className='text-slate-300 text-2xl leading-9 font-medium'>
            Exploring modern technologies, backend architecture, authentication,
            APIs, and scalable application design.

          </p>
        </div>

      </div>

    </section>
  )
}

export default About