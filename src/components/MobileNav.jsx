import React from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoNotifications } from "react-icons/io5";
const MobileNav = ({ show }) => {
  return (
    <div className={`bg-primary fixed w-full top-0 ${show ? 'flex' : 'hidden'}`}>
      <div className="max-w-5xl flex items-center justify-between p-4 mx-auto">
        <IoClose className="text-2xl text-[#D1F1FF] block md:hidden "/>
      <div className="flex items-center gap-6">
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
      </div>
    </div>
  );
};

export default MobileNav;
