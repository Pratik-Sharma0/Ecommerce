import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useCart } from '../Context/CartContextProvider';

const CartItem = ({id,img,name,price,value}) => {
    const {removeItem,increment,decrement}=useCart();

    
  return (
    <>
    <div className='flex justify-around my-[4%] '>
        <div className='flex items-center w-[11%] ml-[-10%] md:ml-[0] md:w-[9%] gap-2 '>
            <img className=' md:w-[30%] md:h-[80%]' src={img} alt='product-img'/>
            <span className=''>{name}</span>
        </div>
        <div className='w-[9%] md:visible invisible md:ml-[-2%]'>{`$${price}`}</div>
        <div className='md:w-[6%] ml-[-5%] flex justify-center items-center  gap-[15%]'>
        <button className='' onClick={()=>decrement(id)}><FaMinus/></button>
  {value}
  <button className=' text-xl' onClick={()=>increment(id)}><IoMdAdd/></button>
        </div>
        <div className='w-[6%] md:visible invisible'>{`$${price * value}`}</div>
        <div className='md:w-[6%] mt-[3%] md:mt-[0] '><MdDelete onClick={()=>removeItem(id)} className='text-yellow-400 hover:text-red-600'/></div>

    </div>
    </>
  )
}

export default CartItem