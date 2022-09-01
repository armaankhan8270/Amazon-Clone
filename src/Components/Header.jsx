import React, { useContext } from 'react'
import logo from './Images/logo.png'
import Search from './Images/search3.png'
import cart from './Images/cart.png'
import {Link} from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateContext } from '../Context/ProductContext';
// import {  } from '../Context/ProductContext';


const Header = () => {
  // const [name] =useProductValue()
  const {screenSize}=useStateContext()
  const{basket,Products}=useStateContext()
  return (
    <div className='bg-black sticky z-50 top-0'>
        <nav className='w-full h-12 bg-fix bg-fixed sticky  z-50 mb-2 pt-2 flex   text-white pb-2 overflow-hidden '>
      <img src={logo} alt="" className='w-32 min-w-0 pt-2 ml-8 '/>
<span className='ml-5 text-[13px] capitalize'>Select your address <span className='font-bold text-l'> <RoomIcon style={{fontSize:'35px'}} className='text-3xl'/></span></span>
<h1 className='text-black w-12 -mr-5 rounded  h-8 items-center p-2 text-sm bg-slate-300 shadow-xl'>All</h1>
<input type="text" name="" id=""placeholder='serach' className='w-[50%] h-full text-black  text-2xl focus:outline-none  outline-none shadow-xl mb-2 ml-4 rounded text-white border-r-2 border-black' />
{/* <img src={Search} alt="" className='mb-2 w-4 rounded  bg-black'/> */}
<SearchIcon className='w-4 rounded -ml-2 mb-1' style={{backgroundColor:"#E8A317 ",fontSize:'40px'}}/>
 <Link to='/Signin'>

 <span className='ml-5 grid col-span-1 capitalize  text-xs'>hello sign in <span className='text-sm font-bold'>account & list </span></span>
 </Link>

<span className='ml-5 grid col-span-1 capitalize text-xs'>Return <span className='font-bold'>orders</span></span>
<Link to='/Basket'>
<ShoppingCartIcon  className='ml-5 rounded-lg shadow-xl' style={{backgroundColor:" ",fontSize:'52px'}}/></Link>
<span className='-ml-6 pt-1  text-red-900 font-extrabold'>{Products?.length ||'0'}</span>
{/* <img src={cart} alt="" className='mb-2  rounded  bg-black'/> */}
        </nav>
    </div>
  )
}

export default Header
