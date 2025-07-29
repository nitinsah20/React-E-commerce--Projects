import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChanger = (e) =>{
     const { name, value } = e.target;

     if (name === "email") setEmail(value);
     if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      // console.log("login successful:", res.data);
      alert("login successful!");
      navigate("/");
    } catch (err) {
      // console.error("login failed:", err.response?.data || err.message);
      alert("login failed!");
    }
  };

  return (
    <div>
      <div>
        <section className="h-auto pt-6 flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                  <label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleChanger}
                      placeholder="Enter your Email"
                      className="mt-1 block w-full  border-gray-300 rounded-md shadow-sm p-2 focus:outline-none mb-3"
                    />
                    <label
                      htmlFor
                      className="block text-sm font-medium text-gray-700"
                    >
                      password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChanger}
                      placeholder="Enter your password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                    />
                  </label>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >Login</button>
              </div>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?
              <Link to="/signup" className="text-indigo-600 hover:underline">
                Signup
              </Link>
              {/* <a href="signup.html" className="text-indigo-600 hover:underline">
                Sign up
              </a> */}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
