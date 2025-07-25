import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ userId, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/products`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product, quantity = 1) => {
    if (!userId) {
      alert("Please log in to add items to your cart!");
      window.location.href = "/login";
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/cart/add`, {
        user_id: userId,
        product_id: product._id,
        quantity,
      });

      if (response.status === 200) {
        setCart(response.data.cart.items);
        alert("Product added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Error adding to cart!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-8">Product List</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-lg font-semibold text-gray-700">₹{product.price}</p>
              <div className="mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
