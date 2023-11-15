import React from "react";
import { HiCreditCard, HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import p2p from '../assets/p2p.png'
import { useDisplay } from "../hooks/useDisplay";
import { NavLink } from "react-router-dom";
import card from '../assets/credit-card.svg'
const Home = () => {
  const [display, setDisplay] = useDisplay(false)
  return (
    <div className="mt-2">
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex bg-white p-5 border border-gray-200 items-center gap-6 w-full rounded-lg shadow-sm">
              <img src={card} className="w-[50px]" alt="" />
              <div>
                <h4 className="text-lg font-medium text-text">Link a card</h4>
                <p className="text-sm font-medium text-gray-700">
                  Send payments in minutes
                </p>
              </div>
            </div>
           {!display && <div className="bg-white p-5 w-full rounded-lg shadow-sm  border border-gray-200">
              <header className="flex justify-between items-start">
                <p className="w-[70%] text-lg font-medium text-text">
                  Personalize payments with new stickers, emojis, and more
                </p>
                <HiXMark className="text-lg tex-text cursor-pointer" onClick={setDisplay} />
              </header>

              <div className="flex justify-between items-baseline mt-5">
                <h1 className="text-lg text-black font-bold">Open in the Paypal app</h1>
                <img src={p2p} alt="img" className=" "/>
              </div>
            </div>}
            <div className=" bg-white p-5 border border-gray-200  gap-6 w-full rounded-lg shadow-sm flex flex-col ">
                <h1 className="text-black font-bold text-lg">Recent activity</h1>
                <p className="text-lg  text-gray-800">See when money comes in, and when it goes out. You’ll find your recent PayPal activity here.</p>
              <NavLink to={'/activity'} className={''}>
              <span className="font-bold text-lg text-blue-500 pt-10 ">
                Show all
              </span>
              </NavLink>
              </div>
          </div>

          <div className=" bg-white  w-full right-0 md:h-[70vh] border border-gray-200 rounded-md">
            <div className="p-10 ">
              <div className="flex items-center justify-between ">
                <span className=" text-lg text-gray-700 font-bold">Cards</span>
                <HiDotsVertical />
              </div>
              <div className="flex items-center py-10 gap-10">
              <img src={card} className="w-[50px]" alt="" />
                <p className="text-lg font-medium text-gray-700 w-[75%]">
                Shop and send payments more securely. Link your credit card now.
                </p>
              </div>
              <NavLink to={'/link'} className={'pt-10'}>
              <span className="font-bold text-lg text-blue-500 pt-10 ">
                Link a card
              </span>
              </NavLink>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
