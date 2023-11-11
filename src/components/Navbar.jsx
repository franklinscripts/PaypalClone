import React from "react";
import { NavLink } from "react-router-dom";
// import  { IoNotifications } from 'react-icons/io'
import { GoAlert } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-primary fixed w-full top-0 ">
      <div className="max-w-5xl flex items-center justify-between p-4 mx-auto">
        <IoMenu className="text-2xl text-[#D1F1FF] block md:hidden "/>
      <div className="flex items-center gap-6">
        <div>
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-monotone-transparent.svg"
            alt="Dashboard"
            className="w-[32px]"
          />
        </div>
        <div className=" items-center gap-3 hidden md:flex">
          <NavLink
            to={"/"}
            className={`py-3 px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to={"/send"}
            className={` py-3 px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
            
          >
            Send
          </NavLink>
          <NavLink
            to={"/wallet"}
            className={` py-3 px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
          >
            Wallet
          </NavLink>
          <NavLink
            to={"/activity"}
            className={` py-3 px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
          >
            Activity
          </NavLink>
          <NavLink
            to={"/help"}
            className={` py-3 px-5 rounded-full font-semibold flex items-center justify-center text-secondary`}
          >
            Help
          </NavLink>
        </div>
      </div>
        <div className="flex gap-6 items-center">
          <IoNotifications className="text-[#D1F1FF] text-xl" />
          <IoSettings  className="text-lg text-[#D1F1FF]"/>
          <span className=" uppercase text-[#D1F1FF] font-medium">log out</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
