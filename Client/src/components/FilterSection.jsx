import React, { useEffect, useRef } from 'react'
import { useFilter } from '../Context/FilterContextProvider'

const FilterSection = () => {
  const{filter:{text,price,maxPrice,minPrice},updateFilter,all_products,clearFilter}=useFilter();
  const getUniqueData=(data,property)=>{
  let newVal=data.map((currentEle)=>{
   return currentEle[property];
  })
 newVal=['all',...new Set(newVal)]
 return (newVal)
  }
  const categoryOnlyData=getUniqueData(all_products,"category");
  const BrandOnlyData=getUniqueData(all_products,"brand");

  const nameInput = useRef(null);
 
 
  useEffect(()=>{
   
    nameInput.current.focus();
  },[])

  
  return (
    
    <>
    <div className=' ml-[5%]'>
      <div>
      <form onSubmit={(e)=>e.preventDefault()}>
          <input className='p-2 w-[70%] md:w-[25vw] mb-4 ' type='text' ref={nameInput} name='text' value={text} onChange={updateFilter} placeholder='search'/>
      </form>
      </div>
      <div>
        <h3 className='font-bold mb-4'>Category</h3>
        {
          categoryOnlyData.map((currentEle,index)=>{
              return <button className='flex flex-col mb-2 font-mono' key={index} type='button' name='category' value={currentEle} onClick={updateFilter}>{currentEle}</button>
          })
        }
      </div>

      <div>
        <h3 className='font-bold mt-8 mb-4'>Brand</h3>
        <form action='#'>
          <select name='brand' className='w-[30vw] md:w-[25vw]' id='brand' onClick={updateFilter}>
            {
              BrandOnlyData.map((currEle,index)=>{
              return <option className='' key={index} name='brand' value={currEle} onClick={updateFilter}>{currEle}</option>
              })
            }
          </select>
        </form>
      </div>
      <div>
        <h3 className='mt-8 mb-4 font-bold'>Price</h3>
        {`$ ${price}`}
        <input className='block bg-yellow-400' 
        type='range'
        name='price'
        max={maxPrice}
        min={minPrice}
        value={price}
        onChange={updateFilter}
        />
      </div>
      <div>
        <button className='bg-yellow-400 mt-8 text-black p-2 font-mono rounded' onClick={clearFilter} >CLEAR FILTER</button>
      </div>
     
    </div>
    </>
  )
}

export default FilterSection