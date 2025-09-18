import logo from '../assets/trend_Hive.jpg'
import buity from '../assets/buity_1.jpg'
export default function Navbar() {
  return (
    <div>
        <div className='flex items-center justify-between bg-pink-100'>
            <div>
                <img src={logo} alt="" className='h-[70%] w-[40%]'/>
            </div>
            <div className='flex justify-center items-center gap-[20px] mr-[15%]'>
            <div className='flex justify-center items-center gap-[30px] mr-[30px] text-xl text-red-300 font-semibold
            '>
                <a>Home</a>
                <a>Product</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div>
                <form className=''>
                    {/* <FaSearch className='text-black w-[20px] h-[20px]'/> */}
                    <input type="text" className='w-[130%] bg-pink-300 rounded-[30px] text-[20px] px-5' placeholder='Type Here...' />
                </form>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            </div>
        </div>

        <div>
            <div>
                <h1>e-commerce Website</h1>
                <span>SUPPORT LOCAL EVERYTHING</span>
            </div>
            <div>
                <img src={buity} alt="" className='rounded-[200%]'/>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}