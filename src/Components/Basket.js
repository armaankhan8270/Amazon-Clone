import React from 'react'
import { useStateContext } from '../Context/ProductContext'
import CheckOut from './CheckOut'
import Header from './Header'
import Navbar from './Navbar'


const Basket = () => {
    const {Products}=useStateContext()
    return (
        <div>
            <Header/>
        <Navbar/>
            <div>
                {Products.map((value,id)=>(
                     <CheckOut
                     title={`L
                     Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)N`}
          id="123456"
          img="https://m.media-amazon.com/images/I/61Er61SxBhL._AC_AA180_.jpg"
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
