import React from "react";

const OccasionSection = () => {
  return (
    <div className="text-center mt-10 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl  text-[#052A3DD9]">
        Shop By Occasion
      </h2>
      <div className="mt-2 flex justify-center items-center">
                    <img
                        src="/design.png"
                        alt="Decorative"
                        className="mx-4 h-[48px] w-[346px] object-contain"
                    />
                </div>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 px-6 md:px-10">
        {/* Office Wear Card */}
        <div className="rounded-lg overflow-hidden shadow-md w-[396px]">
          <img
            src="/Affordable/Group 5523.jpg"
            alt="Office Wear"
            className="w-full h-[540px] object-cover"
          />
        </div>

        {/* Festive Wear Card */}
        <div className="rounded-lg overflow-hidden shadow-md w-[396px]">
          <img
            src="/Affordable/Group 5522.jpg"
            alt="Festive Wear"
            className="w-full h-[540px] object-cover"
          />
        </div>

        {/* Casual Wear Card */}
        <div className="rounded-lg overflow-hidden shadow-md w-[396px]">
          <img
            src="/Affordable/Group 5521.jpg"
            alt="Casual Wear"
            className="w-full h-[540px] object-cover"
          />
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-[#0d2b36] text-white px-8 py-2 rounded-full hover:bg-[#143f4d] transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default OccasionSection;
