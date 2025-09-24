import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa' 
const Navbar = () => {
  return (
    <div>
        <nav className="w-full h-[70px] bg-[#3a4664] flex-wrap flex justify-between items-center px-5">
          <div className='space-x-5'>
          <Link to="/" className="text-2xl font-semibold text-white">E-COMMERCE</Link>
          <Link to="/about" className="text-[20px]  text-white">About</Link>
          <Link to="/contact" className="text-[20px]  text-white">Contact</Link>
          </div>
          <form className='w-[30%] h-[40px] bg-white flex items-center ml-[200px] px-5 gap-5 rounded-md shadow-2xl'>
            <FaSearch className='text-black w-[20px] h-[20px]'/>
            <input type="text" className='w-[100%] outline-none text-[20px] px-5'
            placeholder='Search...' />
          </form>
          <div className="flex text-[20px] gap-[20px] text-white">
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
            <p>✨User</p>
          </div>
        </nav>
      </div>
  )
}

export default Navbar