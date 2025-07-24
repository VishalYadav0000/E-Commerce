import React from "react";

const trends = [
  {
    title: "Minimal Must-haves",
    img: "/Affordable/Group 5517.png",
  },
  {
    title: "Print Parade",
    img: "/Affordable/Group 5515.jpg",
  },
  {
    title: "Pastel Perfection",
    img: "/Affordable/Group 5516.jpg",
  },
];

const ShopByTrend = () => {
  return (
    <div className="text-center bg-white py-12 px-6 md:px-20">

      <h2 className="text-2xl md:text-3xl text-[#052A3DD9]">
        Shop By Trend
      </h2>
      <div className="mt-2 flex justify-center items-center">
        <img
          src="/design.png"
          alt="Decorative"
          className="mx-4 h-[48px] w-[346px] object-contain"
        />
      </div>


      <div className="flex justify-center mt-10 gap-[18px]">
        {trends.map((trend, idx) => (
          <div key={idx} className="relative w-[380px] h-[478px] rounded-lg overflow-hidden shadow-md">
            <img
              src={trend.img}
              alt={trend.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByTrend;
