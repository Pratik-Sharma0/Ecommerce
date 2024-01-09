import React from 'react'
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const ToggleAddToCart = ({value,increment,decrement}) => {
  return (
  <>
  <div className='flex gap-8 font-bold text-black m-4'>

  
  <button className='' onClick={decrement}><FaMinus/></button>
  {value}
  <button className=' text-xl' onClick={increment}><IoMdAdd/></button>
  </div>
  </>
  )
}

export default ToggleAddToCart