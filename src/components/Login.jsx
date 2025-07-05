import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <section className="h-auto pt-6 flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Login to Your Account
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                  <label>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Enter your user name"
                      className="mt-1 block w-full  border-gray-300 rounded-md shadow-sm p-2 focus:outline-none mb-3"
                    />
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                    />
                  </label>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Send OTP
                </button>
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
}

export default Login
