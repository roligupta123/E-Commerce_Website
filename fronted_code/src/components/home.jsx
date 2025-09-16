import React from 'react'
import Navbar from './Navbar'
import Crousle from './crousle'
import Makup from '../assets/makup.jpg'
import Men from '../assets/men.jpg'
import Electronic from '../assets/electronic.jpg'
import Women from '../assets/women.jpg'

const home = () => {
  return (
    <div>
      <Navbar />
      <Crousle />
      <div className='flex items-center justify-between mt-7 p-4'>
        <img src={Makup} alt="" className='w-[20%] h-[150px] rounded-full' />
        <img src={Men} alt="" className='w-[20%] h-[150px] rounded-[100px]' />
        <img src={Electronic} alt="" className='w-[20%] h-[150px] rounded-[100px]' />
        <img src={Women} alt="" className='w-[20%] h-[150px] rounded-[100px]' />
      </div>
    </div>
  )
}

export default home