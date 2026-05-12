const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-8 p-6 border-t border-slate-800'>

      <a
        href="https://github.com/bharatkhandelwal0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className='h-10 hover:scale-110 transition duration-300'
          src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
          alt="github"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/bharatkhandelwal0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className='h-10 hover:scale-110 transition duration-300'
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"
          alt="linkedin"
        />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className='h-15 hover:scale-120 transition duration-300'
          src="https://static.vecteezy.com/system/resources/thumbnails/018/930/413/small/instagram-logo-instagram-icon-transparent-free-png.png"
          alt="instagram"
        />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className='h-12 hover:scale-110 transition duration-300'
          src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png"
          alt="twitter"
        />
      </a>

    </div>
  )
}

export default Footer