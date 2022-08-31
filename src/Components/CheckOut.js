import React from 'react'
import { useStateContext } from '../Context/ProductContext'
import Header from './Header'
import Navbar from './Navbar'


const CheckOut = ({title,id,img,rating,price,company}) => {

    const  {Products}=useStateContext()
    return (
<>
        
        <div className='   s w-[100%] box-shadow-xl min-w-0   '>

             <div className=''>
           
          
        <div className='pl-24 pt-2'>

        </div>
        <div className='pl-12 flex-wrap flex  h-[260px] m-4 border-b-2 border-gray-300'>
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
       <select  className='bg-cyan-500 mb-3 p-2 rounded-xl' name="cars" id="cars" value={'a'}>
    <option className='bg-cyan-600 p-2 m-3  rounded shadow-xl' value="Quantity">Quantity</option>
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
