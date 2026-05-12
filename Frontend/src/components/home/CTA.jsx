import {Link} from 'react-router-dom'
const CTA = () => {
  return (
    <section className='px-6 py-24'>

      <div className='max-w-5xl mx-auto cursor-default bg-purple-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl'>

        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
          Ready To Build Something Amazing?
        </h1>

        <p className='mt-6 text-lg text-purple-100 max-w-3xl mx-auto leading-8'>
          Start your journey with modern technologies and scalable digital solutions today.
        </p>

        <Link to='/login'>
          <button className='mt-10 px-10 py-4 rounded-xl cursor-pointer bg-black hover:bg-slate-900 transition'>
          Get Started
        </button>
        </Link>

      </div>

    </section>
  )
}

export default CTA