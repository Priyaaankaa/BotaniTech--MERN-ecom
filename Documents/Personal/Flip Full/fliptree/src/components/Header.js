import React from 'react'
import Banner from './Banner'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

const cartItems = useSelector(store=> store.cart.items)

const hideHeader = window.location.pathname;
if(hideHeader==="signup")return(null)
  return (
    <div className='bg-gradient-to-br from-white to-green-100'>
    <div className='flex justify-between '>
        <img alt="logo"
        className='h-20'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHboSY3yKTLWpJoDHzhJQ_am4AmZXgXJfJ-g&s' />

        <ul className='flex m-2 p-2'>
        <Link to="/signup"><li className='p-2 m-2 text-slate-500 font-semibold'>SignUp</li></Link>

        <Link to="/login"><li className='p-2 m-2 text-slate-500 font-semibold'>Login</li></Link>
        <Link to="/"><li className='p-2 m-2 text-slate-500 font-semibold'>Home</li></Link>
            <li className='p-2 m-2 text-slate-500 font-semibold'>Shop</li>
            <li className='p-2 m-2 text-slate-500 font-semibold'>Product</li>
            <Link to="/cart"><li className='cursor-pointer p-2 m-2 text-slate-500 font-semibold'>Cart {cartItems.length!==0 && <span className='p-1 px-2 rounded-xl bg-emerald-800 text-white'>{cartItems.length}</span>}</li></Link>
            <li className='p-2 m-2 text-slate-500 font-semibold'>Contact</li>
        </ul>
        
    </div>
    <Banner />
    </div>
  )
}

export default Header
