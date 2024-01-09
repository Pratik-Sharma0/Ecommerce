import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <h2 className='text-8xl text-center m-8'>404 page</h2>
    <h2 className='text-center font-mono text-3xl m-4'>Uh OH! You're lost.</h2>
    <p className='text-center font-mono m-4'>This page you are looking for doesn't exist . How you got here is a mystery. But you can click the button below to go back to homepage</p>
     <NavLink to='/'>
     <button className='bg-yellow-400 text-center md:w-[8%] w-[20%] hover:bg-yellow-600   rounded-md ml-[45%]'>Go Back to Home</button>
     </NavLink>
    
    </>
  )
}

export default Errorpage