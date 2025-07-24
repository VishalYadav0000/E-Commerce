import React from "react";

const ShopSection = () => {
  const labels = ['SHOP KARIGARI', 'SHOP LUXURY', 'SHOP KARIGARI', 'SHOP LUXURY', 'SHOP KARIGARI', 'SHOP LUXURY'];

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

      <div className="flex flex-wrap justify-center gap-8 bg-[#6D001D] text-white py-4">
        {labels.map((label, idx) => (
          <React.Fragment key={idx}>
            <button
              className="
              inline-flex items-center justify-center
              w-[139px] h-[22px]
              font-sans font-light text-[18px] leading-[22px] tracking-[0.03em]
            "
            >
              {label}
            </button>
            {idx < labels.length - 1 && <span className="px-4">★</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
