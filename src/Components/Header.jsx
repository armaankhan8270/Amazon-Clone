import React from 'react'
import logo from './logo.png'
import Search from './search3.png'


const Header = () => {
  return (
    <div className='bg-black'>
        <nav className='w-full h-16  mb-2 pt-2 flex   text-white '>
      <img src={logo} alt="" className='w-32 pt-2 ml-8 '/>
<input type="text" name="" id=""placeholder='serach' className='w-[60%] text-2xl focus:outline-none  outline-none shadow-xl mb-2 ml-4 rounded text-white border-r-2 border-black' />
<img src={Search} alt="" className='mb-2 -ml-2 rounded  bg-black'/>
Country
        </nav>
    </div>
  )
}

export default Header
