import React from 'react'

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Stars = ({stars}) => {
   
 const ratingStar=   Array.from({length:5},(ele,index)=>{
        let number=index+0.5;
       
        return(
            <span key={index}>{
                stars >= index+1?<FaStar/>:stars>=number?<FaStarHalfAlt/>:<FaRegStar/>
            }</span>
        )
    })
    



  return (
    <div className='text-yellow-400 flex gap-2 items-center'><span className='font-bold'>Rating </span>{ratingStar}</div>
  )
}

export default Stars