import React from "react";
import { NavLink } from "react-router-dom";

const Herosection = ({mydata}) => {
    const {name,image}=mydata;
    
    
  return (
    <>
      <div className=" grid gap-10 md:gap-0 md:grid-cols-2 items-center mb-[20px]  ">
        <div className="">
          <h2 className="text-center font-bold ">NEW ARRIVALS</h2>
          <h3 className="text-center text-yellow-400 text-[5rem] font-serif">{name}</h3>
          <p className="text-center font-serif leading-5 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam
            officia tenetur ad fugit, commodi, quisquam vitae odio incidunt
            magni corporis rem. Incidunt, accusamus animi Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Is
          </p>
          <NavLink to='/product'>
          <button className="mx-[40%] mt-4 h-[50px] rounded-md hover:bg-yellow-600 w-[20%] bg-yellow-400">Shop Now</button>

          </NavLink>
          
        </div>
        <img src={image} alt="shoping" className="m-auto w-[80%] h-[120%] rounded-[50%]" />
      </div>
    </>
  );
};

export default Herosection;
