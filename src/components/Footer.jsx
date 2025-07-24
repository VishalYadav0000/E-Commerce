import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white font-[Poppins]">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-10 grid md:grid-cols-2 gap-8 border-t border-gray-300">

                <div className="flex flex-col justify-between border-r border-gray-300 pr-6">

                    <div className="flex flex-col md:flex-row md:items-center md:space-x-5 pb-6 border-b border-gray-300">
                        <img
                            src="/ATK_Logo_Maroon_1 1.png"
                            alt="Atulya Karigari"
                            className="h-12 w-auto"
                        />
                        <p className="text-sm text-[#800000] mt-2 md:mt-0 font-[Poppins]">
                            Where every thread tells a story of grace. Designed to be worn, cherished, and passed on.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-6">
                        <div>
                            <h4 className="text-sm font-bold text-[#052A3D] uppercase mb-3 font-[Poppins]">Quick Links</h4>
                            <ul className="space-y-2 text-sm font-[Poppins] font-normal text-[#052A3D]">
                                <li><a href="#" className="hover:text-[#800000]">Privacy policy</a></li>
                                <li><a href="#" className="hover:text-[#800000]">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-[#800000]">Refund Policy</a></li>
                                <li><a href="#" className="hover:text-[#800000]">Shipping Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-[#052A3D] uppercase mb-3 font-[Poppins]">Info</h4>
                            <ul className="space-y-2 text-sm font-[Poppins] font-normal text-[#052A3D]">
                                <li><a href="#" className="hover:text-[#800000]">Handloom</a></li>
                                <li><a href="#" className="hover:text-[#800000]">New Collection</a></li>
                                <li><a href="#" className="hover:text-[#800000]">Corporate Gifting</a></li>
                                <li><a href="#" className="hover:text-[#800000]">About Us</a></li>
                                <li><a href="#" className="hover:text-[#800000]">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pl-6">
                    <h4 className="text-2xl text-[#7F0A18] mb-5 uppercase font-[Poppins] font-bold">Contact Us</h4>
                    <ul className="space-y-3 text-sm font-[Poppins] font-normal text-[#052A3D]">
                        <li className="flex items-start">
                            <FaMapMarkerAlt className="text-[#052A3D] mt-1 mr-2" />
                            Plot No 1215/1511; Khandagiri Bari, Ghatikia, Khordha, Bhubaneswar-751030 Odisha (India)
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-[#052A3D] mr-2" />
                            atulyakarigariindia@gmail.com
                        </li>
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-[#052A3D] mr-2" />
                            +91 9078077078
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4 mt-5 text-xl text-[#52A3D]">
                        <a href="#"><FaYoutube className="hover:text-[#800000]" /></a>
                        <a href="#"><FaInstagram className="hover:text-[#800000]" /></a>
                        <a href="#"><FaFacebook className="hover:text-[#800000]" /></a>
                        <a href="#"><FaXTwitter className="hover:text-[#800000]" /></a>
                    </div>

                </div>
            </div>
            <div className="w-full">
                <img
                    src="/footer 1.png"
                    alt="Footer Illustration"
                    className="w-full h-auto"
                />
            </div>
        </footer>
    );
};

export default Footer;
