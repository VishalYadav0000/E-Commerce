import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image_url: "",
    cod_available: false,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/products/add", product);
      setMessage("Product added successfully!");
      setProduct({
        name: "",
        price: "",
        description: "",
        category: "",
        image_url: "",
        cod_available: false,
      });
    } catch (error) {
      setMessage("Error adding product: " + error.message);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={product.image_url}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cash on Delivery (COD):</label>
          <input
            type="checkbox"
            name="cod_available"
            checked={product.cod_available}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      {message && <div>{message}</div>}
    </div>
  );
};

export default AddProduct;
