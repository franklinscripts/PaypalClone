import React from "react";
import { NavLink } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { useDisplay } from '../hooks/useDisplay'
import logo from '../assets/paypal-mark-monotone-transparent.svg'
const Navbar = () => {
  const [nav, setNav] = useDisplay()
  return (
    <div className="bg-primary fixed w-full top-0 ">
      <div className="max-w-5xl flex items-center justify-between p-4 mx-auto">
        <IoMenu className="text-2xl text-[#D1F1FF] block md:hidden " onClick={setNav}/>
      <div className="flex items-center gap-6">
        <div>
          <img
            src={logo}
            alt="Dashboard"
            className="w-[32px]"
          />
        </div>
        <div className=" items-center gap-3 hidden md:flex">
          <NavLink
            to={"/"}
            className={`py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
            end
          >
            Home
          </NavLink>
          <NavLink
            to={"/send"}
            className={` py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
            
          >
            Send
          </NavLink>
          <NavLink
            to={"/wallet"}
            className={` py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
          >
            Wallet
          </NavLink>
          <NavLink
            to={"/activity"}
            className={` py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
          >
            Activity
          </NavLink>
          <NavLink
            to={"/help"}
            className={` py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
          >
            Help
          </NavLink>
        </div>
      </div>
        <div className="flex gap-6 items-center">
          <IoNotifications className="text-[#D1F1FF] text-xl" />
          <NavLink 
          to={'/settings'}
          className={` py-3 text-[#D1F1FF]  a-border px-5 rounded-full font-normal flex items-center justify-center `}
          >
          <IoSettings  className="text-lg text-[#D1F1FF]"/>

          </NavLink>
          <NavLink 
          to={'/auth/login'}
          className={` py-3 a-border px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
          >
          <span className=" uppercase text-[#D1F1FF] font-medium">log out</span>
          </NavLink>
        </div>
      </div>
      <MobileNav show={nav}/>
    </div>
  );
};

export default Navbar;
