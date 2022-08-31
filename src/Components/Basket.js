import React from 'react'
import { useStateContext } from '../Context/ProductContext'
import CheckOut from './CheckOut'
import Header from './Header'
import Navbar from './Navbar'


const Basket = () => {
    const {Products}=useStateContext()
    return (
        <div className=''>
            <Header/>
        <Navbar/>
            <div className='bg-gray-300 p-8 flex'>
            <div className='border-b-2   w-[80%] shadow-xl bg-white border-gray-300'>
            <div className='text-2xl   -mt-2 ml-12 border-gray-300 border-b-2'>

            <h1 className='t w-full pt-4  '> Shopping Cart 
            </h1>
            
            <span className='text-end ml-[85%] text-sm text-gray-500 '>Price</span>
            
            </div>
            {/* <h1 className='text-3xl -mt-12 ml-[1100px]'>Price</h1> */}
            {Products.map((value,id)=>(
                    <>
                     
                     <CheckOut
                     title={`L
                     Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)N`}
                     id="123456"
          img="https://m.media-amazon.com/images/I/61Er61SxBhL._AC_AA180_.jpg"
          rating="⭐⭐⭐⭐⭐"
          price="15,990$"
          company="acer"
                     />
          </>
                ))}
            </div>
            <div className='bg-white shadow-xl rounded-lg ml-3 w-[20%] '>

           
            <div className='bg-white shadow-xl rounded-lg ml-3  h-[300px]'>
                <div>

                <h1 className='text-[10px] m-4'>Your order is eligible for FREE Delivery. Select this option at checkout. Details</h1>
                <h1 className=' text-2xl ml-4'>Subtotal {'(2 items)'}</h1>
                <input type="checkbox" name="" id="" className='ml-3'/> <span className='text-[15px] font-semibold'>
                    this order contains a gift
                    </span>
                    <button className='bg-cyan-600 p-2 m-3 w-[70%] rounded shadow-xl'>Proceed To buy</button>
                    <button className='bg-white pt-4 pb-4  w-[90%] rounded shadow-xl ml-3 text-sm text-start'><details>
  <summary className='pl-2'>Emi Available</summary>
  <p className='text-sm pt-4 p-3'>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). Learn more</p>
</details></button>

                </div>
               

            </div> 
            
            </div>
                 
               
            </div>
        </div>
    )
}

export default Basket
