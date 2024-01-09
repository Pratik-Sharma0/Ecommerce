import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from './Context/ProductContextProvider';
import PageNavigation from './components/PageNavigation';
import MyImage from './components/MyImage';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import Stars from './components/Stars';
import ToggleAddToCart from './components/ToggleAddToCart';
import { useCart } from './Context/CartContextProvider';
import Skeleton from 'react-loading-skeleton';

const API='https://dummyjson.com/products'

const SingleProduct = () => {
  const {id}=useParams();
  const{getSingleProduct,singleProduct,isSingleLoading}=useProductContext();
  const{id:alias,title,description,price,discountPercentage,rating,brand,stock,category,thumbnail,images}=singleProduct;
  const{addToCart}=useCart();
  
  
  const[value,setValue]=useState(1); 
  const increment=()=>{
    if(value<=stock){
      setValue(value+1)
    }
   
  }
  const decrement=()=>{
    if(value>1){
      setValue(value-1);
    }
  }
 
  useEffect(()=>{
    getSingleProduct(`${API}/${id}`)
  },[])

  if(isSingleLoading){

    return <>
    <PageNavigation name={title}/>
    <div className='w-[80vw] h-[60vh] flex md:flex-row flex-col md:justify-around items-center md:mt-[10%] '>
      <Skeleton className='md:w-[20vw] w-[80vw] h-[40vh] md:h-[60vh]'/>
      <Skeleton className='w-[80vw] md:w-[50vw] h-[20vh] md:h-[60vh]'/>
    </div>

    </>
  }
  return (
    <>
     <PageNavigation name={title}/>
     
     <div className='flex flex-col md:flex-row justify-center gap-12 md:gap-0 md:w-[80%]  items-center mt-[20%] md:mt-[10%]'>
      <div className='md:w-[50%]'>
      <MyImage imgs={images}/>
      </div>
      <div className='md:w-[50%] w-[80%] '>
        <h2 className='text-4xl mb-[3%]'>{title}</h2>
        <p className='mb-[3%]'><Stars stars={rating}/></p>
        <p className='mb-[3%] font-bold'>MRP: 
          <del> $ {price+100}</del>
        </p>
        <p className='mb-[3%] font-bold text-yellow-400'>Deal of the Day $ {price}</p>
        <p className='mb-[3%]'>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea voluptatibus nemo aspernatur reiciendis? Fuga animi asperiores minus mollitia dolore.</p>
        <div className='flex md:justify-around justify-between items-center  md:p-4 ml-4 '>
          <div>< TbTruckDelivery className='rounded-full border-2 text-3xl border-yellow'/>
          <p className='md:ml-[-40%] '>Free Delivery</p></div>
          <div><TbReplace className='md:ml-[20%] rounded-full border-2 text-3xl border-yellow'/>
          <p className='md:ml-[-25%]'>30 Days Replacement</p></div>
          <div><TbPigMoney className='rounded-full border-2 text-3xl border-yellow'/>
          <p className='md:ml-[-35%]'>Cash On Delivery</p></div>
          <div><MdSecurity className='rounded-full border-2 text-3xl border-yellow'/>
          <p className='md:ml-[-40%]'>2 Year Warranty</p></div>
        </div>
        <hr className='mb-[3%] '/>
        <p className='mb-[3%] '>Availability : <span className='font-bold'>{stock>0?'In Stock':'Not Available'}</span> </p>
        <p className='mb-[3%]'>Product id : <span className='font-bold'>{alias}</span></p>
        <p className='mb-[3%]'>Brand : <span className='font-bold'>{brand}</span> </p>
       <hr className='border-[2] border-black'/>
       <ToggleAddToCart value={value} increment={increment} decrement={decrement} />
       <NavLink to='/cart' onClick={()=>addToCart(id,value,singleProduct)}>
          <button className='ml-4 bg-yellow-400 p-2 hover:scale-105 delay-300 rounded'>ADD TO CART</button>      
       </NavLink>
       
        
      </div>
     </div>
     
    </>
  )
}

export default SingleProduct