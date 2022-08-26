import React from 'react'
import logo from './logo.png'
import Search from './search3.png'
import cart from './cart.png'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoomIcon from '@mui/icons-material/Room';

const Header = () => {
  return (
    <div className='bg-black'>
        <nav className='w-full h-16  mb-2 pt-2 flex   text-white pb-2 overflow-hidden '>
      <img src={logo} alt="" className='w-32 pt-2 ml-8 '/>
<span className='ml-5 text-sm capitalize'>Select your address <span className='font-bold text-l'> <RoomIcon style={{fontSize:'45px'}} className='text-3xl'/></span></span>
<h1 className='text-black w-12 -mr-5 rounded  h-10 items-center p-2 text-sm bg-slate-300 shadow-xl'>All</h1>
<input type="text" name="" id=""placeholder='serach' className='w-[50%]  text-2xl focus:outline-none  outline-none shadow-xl mb-2 ml-4 rounded text-white border-r-2 border-black' />
{/* <img src={Search} alt="" className='mb-2 w-4 rounded  bg-black'/> */}
<SearchIcon className='w-4 rounded -ml-2 mb-1' style={{backgroundColor:"#E8A317 ",fontSize:'50px'}}/>
<span className='ml-5 grid col-span-1 capitalize  text-xs'>hello sign in <span className='text-sm font-bold'>account & list </span></span>
<span className='ml-5 grid col-span-1 capitalize text-xs'>Return <span className='font-bold'>orders</span></span>
<AddShoppingCartIcon className='ml-5 rounded-lg shadow-xl' style={{backgroundColor:" ",fontSize:'62px'}}/>
{/* <img src={cart} alt="" className='mb-2  rounded  bg-black'/> */}
        </nav>
    </div>
  )
}

export default Header
