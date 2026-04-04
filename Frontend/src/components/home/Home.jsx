import { Link } from "react-router-dom"
import HomeHead from "./HomeHead"

const Home = () => {
  return (
    <div className="h-full w-full bg-[url(https://static.dc.com/dc/files/default_images/Movies-Gallery_TheBatman_TBM-10163_61e89f6fc2c947.10565522.jpg?w=1200)]">
      <HomeHead/>
      <div className="flex justify-center items-center h-[90%] w-full ">
        <Link to='/login'><button className='cursor-pointer bg-amber-600 px-10 py-4 rounded-2xl flex text-8xl justify-center items-center'>login </button></Link>
      </div>
    </div>
  )
}

export default Home
