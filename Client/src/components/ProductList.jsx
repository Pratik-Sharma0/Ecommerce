import React from 'react'

import Productmake from './Productmake'




const ProductList = ({products}) => {
   
   
    
    
  return (
    <>
    <div className='grid md:grid-cols-3 gap-4 md:gap-[3%]' >
      {
       products.map((currentEle)=>(

        <Productmake key={currentEle.id} {...currentEle}/>
        
       ))

        
      }
      
    </div>
    </>
  )
}

export default ProductList