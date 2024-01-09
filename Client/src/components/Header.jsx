import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { useCart } from "../Context/CartContextProvider";
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {
  const [isopen,setIsopen]=useState(false);
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  const {total_item}=useCart();
  const toggleNavbar = ()=>{
    setIsopen(!isopen);
  }
  return (
    <>
      <header className="bg-slate-200 sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between text-yellow-400 font-mono p-8 mb-8">
        <img
          src="../src\images\logo.png"
          alt="logo"
          className="logo w-25 h-16"
        />
         <div className="md:hidden">
          <button onClick={toggleNavbar}>{isopen?<IoIosClose className="text-[30px]"/>:<TiThMenu className="text-[30px]"></TiThMenu>}</button>
        </div>
        {
          
          isopen?<div className="flex basis-full flex-col font-mono items-center gap-10 ">
        
              <NavLink to='/'onClick={toggleNavbar} >Home</NavLink>
          <NavLink to='/contact'onClick={toggleNavbar}>Contact</NavLink>
          <NavLink to='/about' onClick={toggleNavbar}>About</NavLink>
          <NavLink to='/product' onClick={toggleNavbar}>Product</NavLink>
          <NavLink className="relative" to='/cart' onClick={toggleNavbar}><IoCartOutline className="text-[20px] relative" />
          <span className="absolute top-[-18px] left-[12px] rounded-[50%] bg-yellow-400 text-black font-bold  border-2 p-[2px] text-[10px]">{total_item}</span>
          </NavLink>
          {
              isAuthenticated && <p>{user.name}</p>
          }
          {
            isAuthenticated?<button className="text-black bg-yellow-400 p-2 rounded" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>: <button className="text-black bg-yellow-400 p-2 rounded" onClick={() => loginWithRedirect()}>Log In</button>
          }
         
          
          </div>:<div className="hidden md:flex justify-between font-mono text-xl items-center w-1/2">
          <NavLink  to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/product'>Product</NavLink>
          <NavLink className="relative" to='/cart'><IoCartOutline className="text-[20px] relative" />
          <span className="absolute top-[-18px] left-[12px] text-sm rounded-[50%] bg-yellow-400 font-bold text-black border-4  p-[2px] text-[10px]">{total_item}</span>
          </NavLink>
          {
            isAuthenticated && <p>{user.name}</p>
          }
          {
            isAuthenticated ? <button className="text-black bg-yellow-400 rounded p-2 " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>:
           <button className="text-black bg-yellow-400 rounded p-2 " onClick={() => loginWithRedirect()}>Log In</button>
          }
         
          

          </div>
        
        
        }
        
       
      </header>
    </>
  );
};

export default Header;

