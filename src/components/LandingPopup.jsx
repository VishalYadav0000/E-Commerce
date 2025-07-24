import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPopup = ({ setShowPopup }) => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        setShowPopup(false);
        navigate(path);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="relative p-[6px] rounded-[30px] bg-gradient-to-r from-white to-[#f5c116] shadow-lg max-w-5xl w-[90%]">

                <div className="flex w-full h-full rounded-[24px] overflow-hidden bg-white">
                    <div className="w-1/2 relative">
                        <button
                            onClick={() => handleClick("/affordable")}
                            className="w-full h-full"
                        >
                            <img
                                src="/Affordable/Affordable.jpg"
                                alt="Affordable"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    </div>

                    <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-20 h-20">
                            <img
                                src="/Group (1).png"
                                alt="Base Logo"
                                className="absolute top-0 left-0 w-[65.68px] h-full object-contain z-10"
                            />
                            <img
                                src="/Component 92.png"
                                alt="Overlay Logo"
                                className="absolute top-0 left-0 w-[108px] h-full object-contain z-20"
                            />

                        </div>
                    </div>

                    <div className="w-1/2 relative">
                        <button
                            onClick={() => handleClick("/luxury")}
                            className="w-full h-full"
                        >
                            <img
                                src="/luxury/Luxury.jpg"
                                alt="Luxury"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPopup;
