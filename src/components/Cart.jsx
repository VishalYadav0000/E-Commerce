import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = ({
    userId,
    cart,
    cartItems,
    setCartItems,
    orderStatus,
    setOrderStatus,
    showCart,
    setShowCart,
}) => {
    const [codConfirmed, setCodConfirmed] = useState(false);

    useEffect(() => {
        if (userId) {
            const fetchCart = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:5000/api/cart?user_id=${userId}`
                    );
                    setCartItems(response.data.cart.items);
                } catch (error) {
                    console.error("Error fetching cart:", error);
                }
            };
            fetchCart();
        }
    }, [userId, cart]);

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.product_id.price,
        0
    );

    const handlePlaceOrder = async () => {
        if (codConfirmed) {
            if (cartItems.length === 0) {
                setOrderStatus("Your cart is empty. Cannot place order.");
                return;
            }
            try {
                const response = await axios.post("http://localhost:5000/api/orders/place", {
                    user_id: userId,
                    payment_method: "COD",
                });

                if (response.status === 201) {
                    setOrderStatus("Order placed successfully!");
                    setCartItems([]);
                }
            } catch (error) {
                setOrderStatus("Error placing order. Please try again.");
                console.error("Order error:", error);
            }
        } else {
            alert("Please confirm Cash on Delivery");
        }
    };

    return (
        <div>
            {showCart && (
                <div className="fixed font-[poppins] inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md sm:max-w-lg overflow-y-auto max-h-[90vh]">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Your Cart</h2>

                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-600">Your cart is empty!</p>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between py-2 text-sm sm:text-base">
                                        <span>{item.product_id.name}</span>
                                        <span>
                                            {item.quantity} x ₹{item.product_id.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {cartItems.length > 0 && (
                            <>
                                <div className="mt-4 font-semibold text-base sm:text-lg">
                                    Total: ₹{totalAmount}
                                </div>

                                <div className="flex items-start mt-4 text-sm">
                                    <input
                                        type="checkbox"
                                        id="codConfirm"
                                        checked={codConfirmed}
                                        onChange={() => setCodConfirmed(!codConfirmed)}
                                        className="mr-2 mt-1"
                                    />
                                    <label htmlFor="codConfirm">
                                        I confirm Cash on Delivery (COD)
                                    </label>
                                </div>
                            </>
                        )}

                        {orderStatus && (
                            <p className="mt-3 text-red-600 text-sm">{orderStatus}</p>
                        )}

                        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
                            {cartItems.length > 0 && (
                                <button
                                    onClick={handlePlaceOrder}
                                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full sm:w-auto"
                                >
                                    Place Order
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    setShowCart(false);
                                    setOrderStatus("");
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full sm:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
