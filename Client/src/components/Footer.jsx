import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative md:w-[98.5vw] w-[96vw] mt-[20%] p-12 bg-yellow-600">
        <div className=" bg-slate-200 absolute top-[-10%] md:top-[-35%] left-[20%] w-[70%] h-[10vh]  md:w-[60%] md:h-[15vh]   flex justify-around items-center">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <NavLink to="/contact">
            <button className="w-[full] p-3 rounded-sm hover:bg-yellow-600 bg-yellow-400">
              GET STARTED
            </button>
          </NavLink>
        </div>
        <div className="grid grid-cols-1  md:flex  justify-center items-center text-center gap-2 md:h-[100%] ">
          <div className="md:w-[25%]">
            <h3 className="font-bold mb-[1rem]">Pratik Sharma</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              velit.
            </p>
          </div>
          <div className="md:w-[25%]">
            <h3 className=" mb-[1rem]">Subscribe to get important update</h3>
            <input className="w-[80%] px-2 mb-[1rem]" type="text" placeholder="Your Email" />
            <button className="bg-yellow-400 p-2 rounded-md font-mono tracking-wide text-[15px] w-[100%]">SUBSCRIBE</button>
          </div>
          <div className="md:w-[25%]">
            <h3 className="font-bold mb-4">follow us</h3>
            <div className="flex justify-center items-center gap-10 ">
            <a  className="rounded-[50%] border-solid border-2 border-slate-400 p-2 " href="https://github.com/Pratik-Sharma0"><FaGithub/></a>
            <a className="rounded-[50%] border-solid border-2 border-slate-400 p-2 " href="https://twitter.com/pratik_code"><BsTwitterX/></a>
            <a className="rounded-[50%] border-solid border-2 border-slate-400 p-2 " href="https://www.linkedin.com/in/pratiksharma0/"><FaLinkedinIn/></a>
            </div>
          </div>
          <div className="md:w-[25%]">
            <h3 className=" mb-2">Call Us</h3>
            <a className="" href="tel:917002709884">+91 7002709884</a>
          </div>
        </div>
      </footer>
      <hr className="bg-slate-400"/>
      <div className="bg-yellow-600 flex items-center justify-around">
        <div>
            <p>@{new Date().getFullYear()} Pratik Sharma. All Right Reserved</p>
        </div>
        <div>
            <h3>PRIVACY POLICY</h3>
            <h3>TERMS & CONDITIONS</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
