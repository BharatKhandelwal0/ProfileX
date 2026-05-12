const Middle = () => {
  return (
    <div className='grid grid-cols-1 cursor-default lg:grid-cols-2 gap-6 p-6 md:p-10'>

      {/* About */}
      <div className='bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold mb-5'>
          About
        </h1>

        <p className='text-slate-300 leading-8 text-sm md:text-base'>
          I am a passionate software developer with strong interest in backend
          systems, scalable APIs, modern UI development, and problem solving.
          I enjoy building clean and efficient applications using technologies
          like React, Node.js, Express, MongoDB, and Tailwind CSS.
        </p>
      </div>

      {/* Skills */}
      <div className='bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold mb-5'>
          Skills
        </h1>

        <div className='flex flex-wrap gap-3'>
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JavaScript",
            "Next.js",
            "MySQL",
            "Git",
            "C++"
          ].map((skill, index) => (
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