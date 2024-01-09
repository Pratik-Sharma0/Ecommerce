import React,{ useState} from 'react'

const MyImage = ({imgs = [{url:''}]}) => {
 const[mainImage,setMainImage]=useState(imgs[0]);
  return (
   <>
   <div className='flex items-center justify-center gap-5'>
    <div className='flex flex-col w-[20%] gap-4  '>
  {
    imgs.map((curr,index)=>{
      return(
        <img className='border-2 p-4 hover:scale-125 duration-300' src={curr} alt={index} key={index} onClick={()=>{setMainImage(curr)}}/>
      )
    })
  }

    </div>
    <div className='w-[50%] '>
      <img src={mainImage} alt='images'/>

    </div>
   </div>

   </>
  )
}

export default MyImage