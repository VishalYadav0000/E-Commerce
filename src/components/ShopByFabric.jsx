import React from "react";

const fabrics = [
  { name: "Silk", img: "/Affordable/Frame 434.jpg" },
  { name: "Cotton", img: "/Affordable/Frame 435 (1).jpg" },
  { name: "Georgette", img: "/Affordable/Frame 436.jpg" },
  { name: "Organza", img: "/Affordable/Frame 437.jpg" },
  { name: "Blended", img: "/Affordable/Frame 439.jpg" },
  { name: "Chiffon", img: "/Affordable/Frame 435 (1).jpg" },
];

const ShopByFabric = () => {
  return (
    <div className="text-center bg-white px-4 md:px-10">

      <h2 className="text-2xl md:text-3xl  text-[#052A3DD9]">
        Shop By Fabric
      </h2>
      <div className="mt-2 flex justify-center items-center">
        <img
          src="/design.png"
          alt="Decorative"
          className="mx-4 h-[48px] w-[346px] object-contain"
        />
      </div>


      <div className="overflow-x-auto scrollbar-hide  mt-10 ">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {fabrics.map((fabric, idx) => (
            <div
              key={idx}
              className="rounded-t-lg overflow-hidden shadow-md bg-white"
              style={{ width: '232px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
            >
              <img
                src={fabric.img}
                alt={fabric.name}
                style={{ width: '232px', height: '289px', objectFit: 'cover', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
              />
            </div>
          ))}
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

export default ShopByFabric;
