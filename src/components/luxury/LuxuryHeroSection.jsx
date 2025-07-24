import React from "react";

const ShopSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-0">
      
        <div className="relative">
          <img
            src="/luxury/Summer Delight 03 1.png"
            alt="Shop Karigari"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </div>

        <div className="relative">
          <img
            src="/luxury/Summer Splash 03 1.png"
            alt="Shop Luxury"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </div>

        <div className="relative">
          <img
            src="/luxury/Summer Symphony 03 1.png"
            alt="Shop Karigari"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 bg-[#800000] text-white text-lg font-medium py-4">
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP KARIGARI
        </button>
        <span className="px-4">★</span>
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP LUXURY
        </button>
        <span className="px-4">★</span>
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP KARIGARI
        </button>
        <span className="px-4">★</span>
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP LUXURY
        </button>
        <span className="px-4">★</span>
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP KARIGARI
        </button>
        <span className="px-4">★</span>
        <button className="px-8 py-4 hover:bg-[#660000] transition-colors">
          SHOP LUXURY
        </button>
        <span className="px-4">★</span>
      </div>
    </div>
  );
};

export default ShopSection;
