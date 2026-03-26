const Header = () => {
  return (
    <div className='h-[40%] w-full  text-white text-3xl font-bold flex items-start  rounded-t-md  p-4'>
        <div className='h-full w-[40%]  flex items-center justify-start p-4'>
            <img className='h-52 w-52 object-cover rounded-full border-2 border-slate-800' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/artistic-high-fashion-portrait-of-a-woman-with-sunglasses-free-image.jpeg?w=600&quality=80"/>
        </div>


        <div className='h-full w-full  flex flex-col p-4'>
            <h1 className='h-full text-5xl font-semibold  mt-5'>Bharat Khandelwal</h1>
            <div className='flex gap-4'>
                <span className='text-sm w-fit px-2 py-1 rounded-3xl bg-slate-900 text-white font-medium'>Software Engineer</span>
                <span className='text-sm w-fit px-2 py-1 rounded-3xl bg-slate-900 text-white font-medium'>Backend Developer</span>
                <span className='text-sm w-fit px-2 py-1 rounded-3xl bg-slate-900 text-white font-medium'>Frontend Developer</span>
            </div>
            <h3 className='h-full w-[60%] text-lg font-normal mt-5'>Software Engineer, Backend Developer Jaipur, Rajasthan</h3>
        </div>
        <div className='h-full w-[70%] flex flex-col gap-5 items-start justify-center p-4'>
            <button className='px-10 py-2 rounded-md bg-slate-900 hover:bg-slate-800 cursor-pointer text-white font-medium'>Follow</button>
            <button className='px-5 py-2 rounded-md  bg-slate-900 hover:bg-slate-800 cursor-pointer text-white font-medium'>Message</button>
        </div>
    </div>
  )
}

export default Header
