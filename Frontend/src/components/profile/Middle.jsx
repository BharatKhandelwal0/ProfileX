const Middle = (props) => {
  return (
    <div className='grid grid-cols-1 cursor-default lg:grid-cols-2 gap-6 p-6 md:p-10'>

      {/* About */}
      <div className='hero bg-slate-900 max-h-80 overflow-y-auto rounded-2xl p-6 border border-slate-800 shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold mb-5'>
          About
        </h1>

        <p className='text-slate-300 leading-8 text-sm md:text-base'>
          {props.about}
        </p>
      </div>

      {/* Skills */}
      <div className='hero bg-slate-900 max-h-80 overflow-y-auto rounded-2xl p-6 border border-slate-800 shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold mb-5'>
          Skills
        </h1>

        <div className='flex flex-wrap gap-3'>
          {props.skills?.map((skill, index) => (
            <span
              key={index}
              className='px-4 py-2 rounded-full bg-purple-700/20 border border-purple-500 text-sm'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Middle