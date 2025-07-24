import React from "react";

const StorySection = () => {
    return (
        <div className="relative w-full h-[750px] sm:h-[600px] md:h-[750px]">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/luxury/ATKVIDEO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="absolute top-6 right-8 md:right-12">
                <a
                    href="#"
                    className="text-white text-sm md:text-lg font-medium hover:underline flex items-center space-x-2"
                >
                    <span>Know the story</span>
                    <span className="text-xl">›</span>
                </a>
            </div>

            <div className="absolute bottom-8 left-8 md:left-12 text-white max-w-lg px-4 sm:px-8">
                <p className="italic text-xs sm:text-sm md:text-lg leading-relaxed">
                    "To create a saree is to compose poetry with thread — every warp
                    and weft a stanza of tradition."
                </p>
            </div>
        </div>
    );
};

export default StorySection;
