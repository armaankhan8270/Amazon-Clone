import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-800 sticky z-50 top-[60px] text-white p-2 gap-5 h-8 w-full shadow-xl flex  -mt-2'>
      <Link to='/pop'>

      <h1 >name</h1>
      </Link>
      <Link to='/'>

      <h1 >Home</h1>
      </Link>
      <h1>cloth</h1>
      <h1>watch</h1>
      <h1>Grocery</h1>
      <h1>Phone</h1>
      <h1>Laptop</h1>
      <h1>Shoes</h1>
      <h1>Kitchen </h1>
      <h1>Books</h1>
      <h1>new Reales</h1>
      <h1>name</h1>
      <h1>name</h1>
      <h1>name</h1>
      <h1 className='w-96 text-4xl pl-12 -p-2 text-bold'>Shamsheera</h1>
    </div>
  )
}

export default Navbar
