import React, { useState } from 'react'
import img1 from './Images/amz12.jpg'
import img2 from './Images/amz13.jpg'
import img3 from './Images/amz14.jpg'
import img4 from './Images/amz15.jpg'
import img5 from './Images/amz16.jpg'
import img6 from './Images/amz17.jpg'

const ImageSlider = () => {
    // const [index, setindex] = useState(0)
    const [number, setnumber] = useState(0)
    const img =[img1,img2,img3,img4,img5,img6]
  return (
    <>
      
    <div className='w-full fle h-[700px] mb-12'>
      <img className='bg' src={img[number]} alt="" />
      <h1 onClick={()=>{
        if(number<5){setnumber(number+1)}}} className='p4 text-[200px]  text-black '>{'<'} </h1>
      <h1 onClick={()=>{
        if(number<5){setnumber(number+1)}}} className='p text-6xl -mt-96 text-black '>{'<'} </h1>
      <h1 onClick={()=>{
        if(number<5){setnumber(number-1)}}} className='pl-[80%] text-6xl -mt-96 text-black text '>{'>'} </h1>
    </div>
    </>
  )
}

export default ImageSlider
