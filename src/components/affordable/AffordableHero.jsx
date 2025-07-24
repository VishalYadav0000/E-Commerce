import React from "react";

const AffordableHero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img
          src="/Affordable/Summer Delight 03 1.jpg"
          alt="Look 1"
          className="w-full h-full object-cover"
        />
        <img
          src="/Affordable/Summer Splash 03 1.jpg"
          alt="Look 2"
          className="w-full h-full object-cover"
        />
        <img
          src="/Affordable/Summer Symphony 03 1.jpg"
          alt="Look 3"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#F09D8D] px-6 py-4 sm:px-10 flex flex-col md:flex-row items-start md:items-center justify-between text-white gap-2">

        <div className="text-lg sm:text-xl md:text-2xl tracking-wide">
          SHOP AFFORDABLE <br className="md:hidden" /> RANGE
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mr-20 text-right sm:text-left">
          <div>
            <div className="font-[Lato] font-normal text-[18px] leading-[40px] tracking-[3%] uppercase text-white/80">
              UNDER
            </div>
            <div className="text-3xl sm:text-4xl  w-[228px] h-[69px]">₹7000</div>
          </div>

          <div>
            <div className="font-[Lato] font-normal text-[18px] leading-[40px] tracking-[3%] uppercase text-white/80">
              UPTO
            </div>
            <div className="text-2xl sm:text-3xl ">
              20<span className="text-sm align-top">%</span>
              <span className="text-xs font-light ml-1">OFF</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AffordableHero;
