import React from "react";

const testimonials = [
    {
        stars: 5,
        text: `As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Attulyakangari piece. Truly wearable art.`,
        author: "Nivedita Roy",
        location: "Kolkata",
    },
    {
        stars: 5,
        text: `As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Attulyakangari piece. Truly wearable art.`,
        author: "Nivedita Roy",
        location: "Kolkata",
    },
    {
        stars: 5,
        text: `As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Attulyakangari piece. Truly wearable art.`,
        author: "Nivedita Roy",
        location: "Kolkata",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-white px-4 md:px-8">
            <h2 className="text-center text-2xl md:text-3xl text-[#052A3DD9]">
                Testimonials
            </h2>
            <div className="mt-2 flex justify-center items-center">
                <img
                    src="/design.png"
                    alt="Decorative"
                    className="mx-4 h-[48px] w-[346px] object-contain"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-10 items-stretch">

                <div className="md:w-1/2 relative flex flex-col justify-between">
                    <img
                        src="/Affordable/Vector 17.png"
                        alt="Happy Clients"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-4 text-3xl leading-relaxed text-[#1e2b39]">
                        Hear from our satisfied <br /> Clients have to say.{" "}
                        <span className="text-[#0d2b36]">❤️</span>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col gap-6 justify-between">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative bg-[#65001b] text-white rounded-lg p-6 shadow-md h-full"
                        >
                            <div className="flex gap-1 mb-2">
                                {[...Array(item.stars)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L3.642 9.384c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.286-3.957z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-sm mb-4">"{item.text}"</p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div>
                                    <p className="font-semibold">{item.author}</p>
                                    <p className="text-xs">{item.location}</p>
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 w-7 h-7 bg-[#f9b5a0] rounded-md flex items-center justify-center cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#65001b]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14M12 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
