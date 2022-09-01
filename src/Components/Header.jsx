import React, { useContext, useState  } from 'react'
import logo from './Images/logo.png'
import Search from './Images/search3.png'
import cart from './Images/cart.png'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateContext } from '../Context/ProductContext';
// import {  } from '../Context/ProductContext';


const Header = () => {
  // const [name] =useProductValue()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {screenSize}=useStateContext()
  const{basket,Products}=useStateContext()
  return (
    <div className='bg-black sticky z-50 top-0'>
        <nav className='w-full h-[60px] bg-fix bg-fixed sticky  z-50 mb-2 pt-2 flex   text-white pb-2 overflow-hidden '>
      <img src={logo} alt="" className='w-32 min-w-0 pt-2 ml-3 h-[50px] '/>
<div className='ml-3 mr-3 w-[165px] h-[60px] text-[14px] font-bold capitalize'>

<span onClick={handleShow} className='mt-4'><span className='font-bold text-l'> <RoomIcon style={{fontSize:'35px'}} className='text-3xl'/></span>Select your address </span>
</div>
<h1 className='text-black w-12 -mr-5 rounded  h-[40px] items-center p-2 text-sm bg-slate-300 shadow-xl'>All</h1>
<input type="text" name="" id=""placeholder='serach' className='w-[50%] h-full text-black h-[38px] text-2xl focus:outline-none  outline-none shadow-xl mb-2 ml-4 rounded text-white border-r-2 border-black' />
{/* <img src={Search} alt="" className='mb-2 w-4 rounded  bg-black'/> */}
<SearchIcon className='w-[45px] h-[40px] rounded -ml-2 mb-1' style={{backgroundColor:"#E8A317 ",fontSize:'40px'}}/>
 <Link to='/Signin'>

 <span className='ml-5 grid col-span-1 capitalize  text-xs'>hello sign in <span className='text-sm font-bold'>account & list </span></span>
 </Link>

<span className='ml-5 grid col-span-1 capitalize text-xs'>Return <span className='font-bold'>orders</span></span>
<Link to='/Basket'>
<ShoppingCartIcon  className='ml-5 rounded-lg shadow-xl' style={{backgroundColor:" ",fontSize:'52px'}}/></Link>
<span className='-ml-6 pt-1  text-red-900 font-extrabold'>{Products?.length ||'0'}</span>
{/* <img src={cart} alt="" className='mb-2  rounded  bg-black'/> */}
        </nav>
        <>
    
      <Modal className='w-[375px] h-[319px] ml-[30%] mt-[10%]' show={show} onHide={handleClose}>
        <Modal.Header className='bg-gray-300 h-12 text-[10px] w-full' closeButton>
          <Modal.Title className='text-sm '>Choose your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h6 className='text-[13px]'>Select a delivery location to see product availability and delivery options</h6>
               
                 <button className='bg-[#f0c14b] text-[13px] mt-1 w-[294px] pr-[6px] pl-[6px] h-[31px] rounded shadow-xl'>sign in to see your address</button>
              <Form.Label>enter pincode</Form.Label>
               <div className='flex'>
              <Form.Control
              className='h-6 w-[90%]'
              type="email"
              
              autoFocus
              />
              <button className='w-12 bg-transparent shadow-xl p-2 -mt-2 rounded-sm'>Apply</button>
              </div>
              <p className='text-[15px] p-3 text-center bg-gray-400 h-4 pt-2 rounded'>Deliver Outside India</p>
            </Form.Group>
           
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
    </div>
  )
}

export default Header
