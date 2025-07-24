import React from "react";

const DrapedGallery = () => {
    return (
        <div className="my-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl text-[#052A3DD9]">
                    Draped by Atulya Karigari
                </h2>
                <div className="mt-2 flex justify-center items-center">
                    <img
                        src="/design.png"
                        alt="Decorative"
                        className="mx-4 h-[48px] w-[346px] object-contain"
                    />
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <div className="w-[466px] h-[620px] relative border-2 border-pink-500 rounded-xl overflow-hidden">
                    <div className="w-[466px] h-[560px]">
                        <img
                            src="/Affordable/Screenshot 2025-06-02 at 4.39.00 PM 1.png"
                            alt="Instagram Reel"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
                        <img src="/image 64.jpg" alt="Instagram" className="w-8 h-8" />
                    </div>

                    <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[#D23088] text-[16px] font-[300] italic leading-[114.99999999999999%] tracking-[3%] font-[Poppins]">
                        @atulyakarigariindia
                    </p>

                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="w-[302px] h-[302px]">
                            <img
                                src="/Affordable/Screenshot 2025-06-02 at 5.09.47 PM 1.png"
                                alt="Photo 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-[496px] h-[302px]">
                            <img
                                src="/Affordable/image (1).png"
                                alt="Photo 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-[496px] h-[302px]">
                            <img
                                src="/Affordable/image (2).png"
                                alt="Photo 3"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-[302px] h-[302px]">
                            <img
                                src="/Affordable/image (3).png"
                                alt="Photo 4"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrapedGallery;
