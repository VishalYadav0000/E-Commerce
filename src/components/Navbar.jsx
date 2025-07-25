import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import axios from "axios";
import Cart from "./Cart";

const Navbar = ({ isLoggedIn, setIsLoggedIn, userId, cart, setCart }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [orderStatus, setOrderStatus] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (userId) {
            const fetchCart = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/cart?user_id=${userId}`);
                    setCartItems(response.data.cart.items);
                } catch (error) {
                    console.error("Error fetching cart:", error);
                }
            };
            fetchCart();
        }
    }, [userId, cart]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="w-full">
            <div className="bg-[#720d29] text-white text-[12px] text-center py-1">
                Step into Style and Discover Your Signature Look
            </div>

            <div className="px-4 py-4 font-[Lato] bg-white shadow relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-[#a52729]">Atulya</span>
                        <div className="bg-gradient-to-r from-[#f5c116] to-[#f39c12] text-white text-[10px] font-semibold px-2 py-1 rounded-sm leading-none">
                            <span className="text-sm mr-1">Karigari</span>
                            <span className="text-[8px] opacity-70">INDIA</span>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <FiX className="text-2xl text-gray-700" /> : <FiMenu className="text-2xl text-gray-700" />}
                        </button>
                    </div>

                    <div className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
                        <a href="/" className="hover:text-black">HANDLOOM</a>
                        <a href="/occasion" className="hover:text-black">SHOP BY OCCASION</a>
                        <a href="/" className="hover:text-black">CRAFT STORIES</a>
                        <a href="/footer" className="hover:text-black">ABOUT US</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center bg-[#f7b4a3] px-4 py-2 rounded-full text-sm text-gray-700">
                            <input
                                type="text"
                                placeholder="Search for Banarasi Sarees"
                                className="bg-transparent outline-none placeholder-gray-700 w-48"
                            />
                            <FiSearch className="ml-2 text-gray-700" />
                        </div>

                        <FiHeart className="text-xl text-gray-700 cursor-pointer" />

                        <div className="relative" onClick={() => setShowCart(!showCart)}>
                            <FiShoppingCart className="text-xl text-gray-700 cursor-pointer" />
                            {totalCartItems > 0 && (
                                <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                    {totalCartItems}
                                </div>
                            )}
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <img
                                    src={isLoggedIn ? "/user-avatar.jpg" : "/guest-avatar.png"}
                                    alt="User"
                                    className="w-8 h-8 rounded-full object-cover border"
                                />
                            </div>

                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border rounded text-sm z-50">
                                    {!isLoggedIn ? (
                                        <>
                                            <a href="/login" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Login</a>
                                            <a href="/signup" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Sign Up</a>
                                        </>
                                    ) : (
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                localStorage.removeItem("token");
                                                setIsLoggedIn(false);
                                                window.location.href = "/affordable";
                                            }}
                                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                                        >
                                            Logout
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="mt-4 flex flex-col gap-4 md:hidden text-sm text-gray-700">
                        <a href="/" className="hover:text-black">HANDLOOM</a>
                        <a href="/occasion" className="hover:text-black">SHOP BY OCCASION</a>
                        <a href="/" className="hover:text-black">CRAFT STORIES</a>
                        <a href="/footer" className="hover:text-black">ABOUT US</a>

                        <div className="flex items-center bg-[#f7b4a3] px-4 py-2 rounded-full text-gray-700 mt-2">
                            <input
                                type="text"
                                placeholder="Search for Banarasi Sarees"
                                className="bg-transparent outline-none placeholder-gray-700 w-full"
                            />
                            <FiSearch className="ml-2 text-gray-700" />
                        </div>

                        <div className="flex gap-4 items-center mt-2">
                            <FiHeart className="text-xl text-gray-700 cursor-pointer" />
                            <div className="relative">
                                <FiShoppingCart
                                    className="text-xl text-gray-700 cursor-pointer"
                                    onClick={() => setShowCart(true)}
                                />
                                {totalCartItems > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                        {totalCartItems}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                )}
            </div>

            {showCart && (
                <Cart
                    userId={userId}
                    cart={cart}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setOrderStatus={setOrderStatus}
                    orderStatus={orderStatus}
                    showCart={showCart}
                    setShowCart={setShowCart}
                />
            )}


        </div>
    );
};

export default Navbar;
