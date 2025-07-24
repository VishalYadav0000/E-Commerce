import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = ({setIsLoggedIn}) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/auth/login`, {
        phone,password
      });
      setIsLoggedIn(true)
      alert("Login Successful");

      localStorage.setItem("token", res.data.token);

      window.location.href = "/affordable"; // or use navigate()

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-4 py-2 rounded outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#720d29] text-white py-2 rounded hover:bg-[#5a0e21]"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#720d29] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
