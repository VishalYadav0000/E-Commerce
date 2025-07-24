import React from "react";

const AffordableHero = () => {
  return (
    <div className="w-full h-screen flex flex-col">

      <div className="flex-1 grid grid-cols-3">
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

      <div className="bg-[#f7b4a3]
                px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between text-white">

        <div className="text-xl md:text-2xl tracking-wide">
          SHOP AFFORDABLE <br className="md:hidden" /> RANGE
        </div>

        <div className="flex gap-8 mt-4 mr-30 md:mt-0 text-right">
          <div>
            <div className="font-[Lato] font-normal text-xs mr-10 text-white/80">UNDER</div>
            <div className="text-4xl md:text-3xl ">₹7000</div>
          </div>
          <div>
            <div className="font-[Lato] font-normal text-xs mr-10 text-white/80">UPTO</div>
            <div className="text-2xl md:text-3xl ">
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
