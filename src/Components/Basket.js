import React from 'react'
import { useStateContext } from '../Context/ProductContext'
import CheckOut from './CheckOut'

const Basket = () => {
    const {Products}=useStateContext()
    return (
        <div>
            <div>
                {Products.map((value,id)=>(
                     <CheckOut
                     title={value.item.title}
               id="123456"
               img="https://m.media-amazon.com/images/I/81d6MCVyDiL._CR76,0,1129,637_SR342,193_.png"
               rating="⭐⭐⭐⭐⭐"
               price="15,990$"
               company="acer"
                     />
                ))}
               aas
            </div>
        </div>
    )
}

export default Basket
