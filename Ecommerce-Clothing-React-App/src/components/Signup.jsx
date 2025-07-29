import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChanger = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "mobile") setMobile(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        mobile,
        email,
        password,
      });
      console.log("Signup successful:", res.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed!");
    }
  };

  return (
    <div>
      <section className="bg-gray-100 h-auto pt-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create a New Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                value={name}
                onChange={handleChanger}
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Enter your mobile number"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                value={mobile}
                onChange={handleChanger}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                value={email}
                onChange={handleChanger}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                value={password}
                onChange={handleChanger}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
