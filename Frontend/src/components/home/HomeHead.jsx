import { Link } from 'react-router-dom'

const HomeHead = () => {
  return (
    <div className=' text-black h-[10%] bg-transparent- flex justify-between items-center px-5'>
      <img className='h-17' src="https://www.pngmart.com/files/23/Daredevil-Logo-PNG-HD-Isolated.png" alt="" />
      <div className='flex gap-7'>
        <button className='bg-amber-600 px-7 py-2 rounded-2xl cursor-pointer'>About</button>
        <button className='bg-amber-600 px-7 py-2 rounded-2xl cursor-pointer'>Product</button>
        <button className='bg-amber-600 px-7 py-2 rounded-2xl cursor-pointer'>Service</button>
        <Link to='/login'><button className='bg-amber-600 px-7 py-2 rounded-2xl cursor-pointer'>login</button></Link>
      </div>
    </div>
  )
}

export default HomeHead
