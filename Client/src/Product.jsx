import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import { useFilter } from './Context/FilterContextProvider'

const Product = () => {
  const {filter_products,all_products,sorting,}=useFilter()
  
  
  return (
   <>
    <div className='flex w-[90vw]  justify-around'>
      <div className='w-[50%] '><FilterSection/></div>
      <div className='flex w-[50%] flex-col'>
        <div><Sort products={filter_products} sorting={sorting}/></div>
        <div className='w-[50vw]'><ProductList products={filter_products} /></div>
      </div>

    </div>
    <div className='md:p-[15%]'></div>
   </>
  )
}

export default Product