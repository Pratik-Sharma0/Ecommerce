import React from 'react'

const Sort = ({products,sorting}) => {
  return (
    <>
    <div className='flex justify-between items-center mb-[10%] text-xs md:text-xl'>
   <p className=''><span className='font-bold text-black'>{products.length}</span> Product Available</p> 
   <div>
    <form action='#'>
      <label htmlFor='sort'></label >
      <select name='sort' id='sort' onClick={sorting}>
        <option value='lowest'>Price(Lowest)</option>
        <option value='highest'>Price(highest)</option>
        <option value='a-z'>Name(a-z)</option>
        <option value='z-a'>Name(z-a)</option>
      </select>
    </form>
   </div>
   </div>
    </>
  )
}

export default Sort