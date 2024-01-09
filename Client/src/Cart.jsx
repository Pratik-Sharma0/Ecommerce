import React from 'react'
import { useCart } from './Context/CartContextProvider'
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {loadStripe} from '@stripe/stripe-js';



const Cart = () => {
 const{cart,clearCart,total_price,shipping}=useCart();
 
 
 
 const { user, isAuthenticated } = useAuth0();
 //payment integration
 const makePayment=async()=>{
try {
    const stripe = await loadStripe('pk_test_51OWde8SBuWCdys5e3zJLqahx9e5QwYXsBuGao56grqxWUM5np7sj5fGIFkfWqdMtF4zUmRZtBeIydC34DrtWIquq00UskEBpG6');
    const body={
      products:cart
    }
    const headers={
      'Content-Type':'application/json'
    }
    const response=await fetch('http://localhost:7000/api/create-checkout-session',{
      method:'POST',
      headers:headers,
      body:JSON.stringify(body)
    });
    const session = await response.json()
    const result = stripe.redirectToCheckout(
      {
        sessionId:session.id
      }
    )
    if(result.error){
      console.log(result.error)
    }
} catch (error) {
  console.log(error);
}

  
 }
 

 if(cart.length===0){
  return( 
    <>
    <div className=' flex flex-col justify-center items-center gap-10'>
     <h2 className='text-3xl text-center' >No Product in Cart</h2>
     <NavLink to='/product'>
      <button className='my-[2%]  rounded bg-yellow-400 p-2 font-bold '>Shopping</button>
     </NavLink>
     </div>
    </>
 
         
  )
 }
 
  return (
   <>
   {
    isAuthenticated &&(
      <div className='flex gap-4'>
        <img src={user.profile} alt='image'/>
        <h2>{user.name}</h2>
      </div>
    )
   }
   <div className='w-[80%] m-[auto]'>
    <div className='flex justify-around '>
      <p>Item</p>
      <p className='md:visible invisible'>Price</p>
      <p>Quantity</p>
      <p className='md:visible invisible'>Subtotal</p>
      <p>Remove</p>
    </div>
    <hr/>
    <div>
      {
        cart.map((currentEle)=>{
          return <CartItem key={currentEle.id} {... currentEle}/>
        })
      }
    </div>
    <hr/>
    <div className='flex justify-between'>
    <button className='my-[2%] rounded bg-yellow-400 h-[10%] duration-300 hover:scale-105  p-2 font-bold' onClick={clearCart}>Clear Cart</button>
    <div className='w-[30%] rounded m-[2%] p-2 bg-slate-200'>
      <p className='mb-2'>Subtotal: <span className='font-bold'>{`$${total_price}`}</span></p>
      <p className='mb-2'>Shipping Fee: <span className='font-bold'>{`$${shipping}`}</span></p>
      <hr className='border-1 border-black mb-2'/>
      <p className='mb-2'>Order Total: <span className='font-bold'>{`$${total_price+shipping}`}</span> </p>
      <button className='bg-green-600 rounded p-2 font-bold hover:scale-105 duration-300' onClick={makePayment}>Checkout Payment</button>
      
    </div>
    
    </div>
    
    
      
    

   </div>
   </>
  )
}

export default Cart






