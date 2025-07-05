import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-100 h-auto pt-6 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Create a New Account
            </h2>
            <form action className="space-y-4">
              <div>
                <label
                  htmlFor
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name
                  id
                  placeholder="Enter your full name"
                  className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name
                  id
                  placeholder="Enter your mobile number"
                  className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name
                  id
                  placeholder="Enter your email address"
                  className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
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
              Already have an account?
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
              {/* <a href="Login.html" className="text-indigo-600 hover:underline">
                Login
              </a> */}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default signup;
