import React from 'react'
import { useProductContext } from '../Context/ProductContextProvider'
import Productmake from '../components/Productmake'
import SkeletonProduct from './SkeletonProduct';





const LimitedStock = () => {
    const{isLoading,limitedStocks}=useProductContext();

  return (
    <>
    <div className=' w-[100%] md:p-[6%] p-[8%] md:mt-[10%] mt-[20%]  border '>
    <div className='mx-[17%] text-[1.2rem] text-yellow-400'>Check Now !</div>
    <h3 className='mx-[17%] mb-[2%] md:text-[2rem] font-mono'>Hurry up limited product available</h3>
   <div className='flex justify-center p-[2%] w-[100%] mx-[auto] gap-[5%]  '>
    
    
    { isLoading?
    limitedStocks.map((currentEle)=>(
      <SkeletonProduct key={currentEle.id} {...currentEle}/> 
 
  )
      
    )
    :limitedStocks.map((currentEle)=>(
     <Productmake key={currentEle.id} {...currentEle}/> 

 )
     
   )}
   
   </div>
   </div>

    </>
  )
}

export default LimitedStock