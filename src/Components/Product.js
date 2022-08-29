import React,{useState} from 'react'
import pro from './Images/pro1.jpg'
import { useStateContext } from '../Context/ProductContext'
const Product = ({title,id,img,rating,price,company}) => {
  const{basket,setbasket,Products,setProducts,}=useStateContext()
  const [dataa, setdataa] = useState({
    item:{
        id:'',
        title:'',
        price:'',
        img:''

    }
})
  const addtoBucket=()=>{

setbasket({
  item:{
    id:id,
    title:title,
    price:price,
    img:img

}

})
Products.push(basket)
console.log(Products)
}

  return (
    <div className='ml-24 shadow-xl p-3 w-1/4 mt-2 flex-1'>
        <div className='pl-24 pt-2'>

        </div>
        <div className='pl-12'>
        <img className='items-center' src={img} alt="a" />

        <h1 className='w-[90%] '>{title}</h1>
        <h1 >{company}</h1>
        <h1>{rating}</h1>
        <h1>{price}</h1>
        <button onClick={addtoBucket}> Add to Bucket</button>
        {Product?Products.map((val,id)=>{
          <h1>{val.item.id}</h1>
        }):<h1>d</h1>}
      

        </div>
    </div>
  )
}

export default Product
