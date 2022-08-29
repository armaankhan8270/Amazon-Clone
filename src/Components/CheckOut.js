import React from 'react'

const CheckOut = ({title,id,img,rating,price,company}) => {
    return (
        <div>
             <div className='ml-24 shadow-xl p-3 w-1/4 mt-2 flex-1'>
        <div className='pl-24 pt-2'>

        </div>
        <div className='pl-12'>
        <img className='items-center' src={img} alt="a" />

        <h1 className='w-[90%] '>{title}</h1>
        <h1 >{company}</h1>
        <h1>{rating}</h1>
        <h1>{price}</h1>
        <button > Add to Bucket</button>
        {/* {Product?Products.map((val,id)=>{
          <h1>{val.item.id}</h1>
        }):<h1>d</h1>} */}
      

        </div>
    </div>
        </div>
    )
}

export default CheckOut
