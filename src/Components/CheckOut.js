import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const CheckOut = ({title,id,img,rating,price,company}) => {
    return (
<>
        
        <div className=' bg-gray-200 h-screen shadow-lg w-[100] box-shadow-xl min-w-0 pt-12 '>

             <div className='ml-3 shadow-xl  bg-white  rounded-lg lg:h-[450px]  sm:h-[1200px] p-3 w-[100%]   f'>
           
           <div className='border-b-2 m-2  border-gray-300'>
            
            <h1 className='text-4xl p-4'> Shopping Cart</h1>
            <h1 className='text-3xl -mt-12 ml-[1100px]'>Price</h1>
            </div> 
        <div className='pl-24 pt-2'>

        </div>
        <div className='pl-12 flex-wrap flex h-44 m-4 border-b-2 border-gray-300'>
            <div className='w-[13%]'>

        <img className='' src={img} alt="a" />
            </div>
<div className='w-[60%] m-2'>

        <h1 className='w-[100%] text-slate-700 font-semibold '>{title}</h1>
        <p className='text-sm text-slate-500 m-1'>In stock</p>
        <p className='text-sm text-slate-500 m-1'>Eligible for FREE Shipping</p>
        <p className='text-sm text-slate-900 m-1'> <input type="checkbox" name=""  id="" /> This will be a giftThis is a gift Learn more</p>
        {/* <button className='bg-slate-200 p-2 rounded '>Quantity
        
    </button> */}
       <select name="cars" id="cars" value={'a'}>
    <option className='bg-gray-500 text-black p-4' value="Quantity">Quantity</option>
    <option value="saab">1</option>
    <option value="opel">2</option>
    <option value="audi">3</option>
  </select>
    </div>
    <div className='text-end font-bold'>

        <h1>{price}</h1>
    </div>
</div>
        {/* {Product?Products.map((val,id)=>{
            <h1>{val.item.id}</h1>
        }):<h1>d</h1>} */}
      

    </div>
        </div>
        </>
    )
}

export default CheckOut
