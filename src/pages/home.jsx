import React from "react";
import { HiCreditCard } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex bg-white p-5 items-center gap-6 w-full rounded-lg shadow-sm">
              <HiCreditCard className=" text-2xl " />
              <div>
                <h4 className="text-lg font-medium text-text">Link a card</h4>
                <p className="text-sm font-medium text-gray-700">
                  Send payments in minutes
                </p>
              </div>
            </div>
            <div className="bg-white p-5 w-full rounded-lg shadow-sm">
              <header className="flex justify-between items-start">
                <p className="w-[70%] text-md font-medium text-text">
                  Personalize payments with new stickers, emojis, and more
                </p>
                <HiXMark className="text-lg tex-text cursor-pointer" />
              </header>

              <div className="flex">
                <h1>Open in the Paypal app</h1>
                {/* <img src="https://www.paypalobjects.com/marketing/ps/286453-p2pthemes-september.png" alt="img" className=" "/> */}
              </div>
            </div>
          </div>

          <div className=" bg-white  w-full right-0">Hi</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
