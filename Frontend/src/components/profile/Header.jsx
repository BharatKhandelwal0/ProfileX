const Header = () => {
  return (
    <div className='flex flex-col cursor-default lg:flex-row gap-8 p-6 md:p-10 border-b border-slate-800'>

      {/* Profile Image */}
      <div className='flex justify-center lg:justify-start'>
        <img
          className='h-40 w-40 md:h-52 md:w-52 object-cover rounded-full border-4 border-purple-500 shadow-lg'
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/artistic-high-fashion-portrait-of-a-woman-with-sunglasses-free-image.jpeg?w=600&quality=80"
          alt="profile"
        />
      </div>

      {/* Info */}
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-3xl md:text-5xl font-bold'>
          Bharat Khandelwal
        </h1>

        <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-4'>
          <span className='text-sm px-4 py-2 rounded-full bg-slate-800'>
            Software Engineer
          </span>

          <span className='text-sm px-4 py-2 rounded-full bg-slate-800'>
            Backend Developer
          </span>

          <span className='text-sm px-4 py-2 rounded-full bg-slate-800'>
            Frontend Developer
          </span>
        </div>

        <p className='text-slate-300 mt-5 text-base md:text-lg max-w-2xl'>
          Passionate full stack developer focused on scalable backend systems,
          modern frontend experiences, and clean architecture.
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-6'>
          <button className='px-8 py-3 cursor-pointer rounded-lg bg-purple-600 hover:bg-purple-800 transition duration-300 font-medium'>
            Follow
          </button>

          <button className='px-8 py-3 cursor-pointer rounded-lg border border-slate-700 hover:bg-slate-800 transition duration-300 font-medium'>
            Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
