import React from "react";

const SignatureCollection = () => {
    return (
        <div className="w-full bg-white py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl text-[#052A3DD9] relative inline-block">
                    Signature Collection
                </h2>
                <div className="mt-2 flex justify-center items-center">
                    <img
                        src="/design.png"
                        alt="Decorative"
                        className="mx-4 h-[48px] w-[346px] object-contain"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                        src="/luxury/Component 87.png"
                        alt="Khaddi"
                        className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <p className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg">
                        Khaddi
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                        src="/luxury/Component 88.png"
                        alt="Kasavu"
                        className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <p className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg">
                        Kasavu
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                        src="/luxury/Component 91.png"
                        alt="Tissue Hand Woven Saree"
                        className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <p className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg">
                        Tissue Hand Woven Saree
                    </p>
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="bg-[#800000] text-white px-10 py-3 rounded-full text-lg hover:bg-[#660000] transition-colors">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default SignatureCollection;
