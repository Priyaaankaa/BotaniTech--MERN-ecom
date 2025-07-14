import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

  const cartItems = useSelector(store=>store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <h1 className='ml-5 text-2xl text-amber-950  font-serif'>Your cart has {cartItems.length} items</h1>
      <ul>
      {cartItems.map((item, index) => 
         <li  key= {index} className='m-10 w-9/12  h-72 shadow-xl bg-green-50'>
         <img alt='plant-image' className='px-5 rounded-lg drop-shadow-lg w-52' src={item.default_image?.thumbnail} />
         <h1 className='px-5 line-clamp-1 text-gray-500'>Plant Cycle - {item.cycle}</h1>
         <h1 className='px-5 line-clamp-1'>{item.common_name}</h1>
         <p className='ml-56 bottom-10'>A perennial plant is a resilient species that lives for more than two years, blooming season after season. Known for their ability to regrow from roots each year, they are ideal for creating lasting, vibrant gardens. 🌱</p>

       </li>
    
    )}
      </ul>
    </div>
  )
}

export default Cart
