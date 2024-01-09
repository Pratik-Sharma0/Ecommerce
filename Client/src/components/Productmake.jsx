import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

const Productmake = (currentEle) => {
  
    const {id,title,thumbnail,price,rating,description,category}=currentEle
  return (
    <>
    <NavLink to={`/singleproduct/${id}`}>
   <div className='px-[2%]  md:flex flex-col border-2 justify-center hover:scale-105 transition ease-in-out duration-300'>
   <img className=' w-[100%] object-cover md:h-[15vh]' src={thumbnail} alt='photo'/>
   <div className='mx-[3%] md:text-[1rem] text-[0.5rem] font-bold'> {title}
   <div>{description.slice(0,20)}...</div>
   <div className='md:text-[0.8rem] mt-[3%] font-mono text-slate-400'>{category}</div>
   <div className='text-yellow-400'>$ {price}</div>
   </div>
  
   </div>
   </NavLink>
   
    

        
   
    </>
  )
}

export default Productmake