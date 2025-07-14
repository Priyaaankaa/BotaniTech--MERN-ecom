import React from 'react'
import { useDispatch } from 'react-redux';
import {addItem} from '../utils/cartSlice';

const WidgetCard = ({info}) => {
    // console.log(info?.data);
    const path =info?.data;

  const dispatch = useDispatch();
  const handleAddToCart =(item)=>{
    dispatch(addItem(item))
  }

   

  return (
    <div>
      <div className='flex justify-center'>
      <h1 className='Font-bold text-4xl text-amber-950 mb-3 underline font-serif '> New Arrivals</h1>
      </div>
     
      <ul className='flex flex-wrap'>
    {path.slice(0, 10).map((item) =>
    
    // <img src={item.default_image.thumbnail} />
    <li  key= {item.id} className='m-10 w-52  h-72 shadow-xl'>
      <img alt='plant-image' className=' rounded-lg drop-shadow-lg w-52' src={item.default_image?.thumbnail} />
      <h1 className='line-clamp-1 text-gray-500'>Plant Cycle - {item.cycle}</h1>
      <h1 className='line-clamp-1'>{item.common_name}</h1>
      <div className='flex justify-center items-center my-5'>
      <button onClick={()=> handleAddToCart(item)}
      className=' rounded-xl border border-green-300 bg-green-300 p-2 hover:bg-green-500 hover:text-white '>Add to My Garden </button>
      </div>
    </li>
   
    )}
</ul>
</div>


   
  )
}

export default WidgetCard;
