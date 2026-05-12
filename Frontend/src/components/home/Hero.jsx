import bharat from '../../assets/bharat.jpg'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section
      id='home'
      className='h-screen cursor-default max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-14'
    >

      <div className='flex-1 text-center lg:text-left'>

        <span className='px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-sm'>
          Welcome To My Platform
        </span>

        <h1 className='text-6xl md:text-7xl font-extrabold mt-8 leading-tight'>
          Bharat Khandelwal <br/>
          <span className='text-purple-500 text-6xl md:text-5xl'> MERN Stack Developer </span>
        </h1>

        <p className='text-slate-300 text-lg font-medium mt-8 max-w-2xl leading-8'>
          Responsive websites, scalable backend systems, modern UI/UX,
          optimized performance, and clean architecture.
        </p>

        <div className='flex flex-wrap justify-center lg:justify-start gap-5 mt-10'>
          <Link to='/login'>
            <button className='px-8 py-4 rounded-xl cursor-pointer bg-purple-600 hover:bg-purple-700 transition'>
              Get Started
            </button>
          </Link>

            <button className='px-8 py-4 rounded-xl border cursor-pointer border-slate-700 hover:bg-slate-900 transition'>
              Learn More
            </button>
        </div>

      </div>

      <div className='flex-1 flex justify-center'>
        <img
          className='h-7/12 w-full max-w-md object-center rounded-3xl shadow-2xl border border-slate-800'
          src={bharat}
          alt='hero'
        />
      </div>

    </section>
  )
}

export default Hero