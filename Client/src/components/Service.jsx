import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <div className="py-[3rem]  text-lg text-yellow-400 md:flex items-center justify-center gap-[10%]  w-[100%] ">
        <div className="flex bg-slate-200 rounded-lg md:ml-[20px] p-[2rem] justify-center my-[2rem] items-center flex-col">
          <TbTruckDelivery />
          <h3 className="text-center">Super Fast and Free Delivery</h3>
        </div>

        <div className="flex bg-slate-200 rounded-lg p-[2rem] justify-center my-[2rem] items-center flex-col">
          <MdOutlineSecurity />
          <h3 className="text-center">Non-contact Shipping</h3>
        </div>
        <div className="flex bg-slate-200 rounded-lg p-[2rem] justify-center my-[2rem] items-center flex-col">
          <GiReceiveMoney />
          <h3 className="text-center">Money-back Guarantee</h3>
        </div>

        <div className="flex bg-slate-200 rounded-lg p-[2rem] md:mr-[20px] justify-center my-[2rem] items-center flex-col">
          <RiSecurePaymentLine />
          <h3 className="text-center">Super Secure Payment System</h3>
        </div>
      </div>
    </>
  );
};

export default Service;
