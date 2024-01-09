import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProduct = () => {
  return (
    <>
  <div className='w-[10vw] border-2 h-[30vh] p-2 '>
    <Skeleton className='h-[50%]'/>
    <Skeleton className='h-[20%]'/>
    <Skeleton className='h-[5%] w-[50%]'/>
    <Skeleton className='h-[5%] w-[50%]'/>
  </div>



    </>
  )
}

export default SkeletonProduct