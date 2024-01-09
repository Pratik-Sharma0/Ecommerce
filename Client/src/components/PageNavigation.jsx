import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({name}) => {
   
  return (
    <>
    
    <div className='bg-slate-200 mt-[-2rem]  p-2  z-[40]  fixed w-[100%]  text-2xl font-bold'>
    <NavLink className='text-yellow-400 ml-8' to='/' >Home</NavLink>/{name}
    </div>

    
    </>
  )
}

export default PageNavigation