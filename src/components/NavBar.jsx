import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const nav = ["New", "Women", "Men", "Contact Us"];
  return (
    <>
      <header class="w-full">
        <div class="bg-black text-white text-center py-2 text-sm">
          Sale is on! 25% off sitewide using TEES25 at checkout
        </div>

        {/* Navigation  */}
        <nav class="flex flex-col md:flex-row md:items-center border-t border-b bg-white">
          <div class="bg-[#E6E6FA] px-6 py-4 md:px-10 font-bold text-xl text-center md:text-left">
            <Link to="/">T Shop</Link>
          </div>
          <ul class="flex-1 flex flex-wrap justify-center md:justify-end items-center">
            {nav.map((n) => (
              <li class="px-4 md:px-20 py-4 border-r text-gray-700 hover:bg-[#E6E6FA] cursor-pointer">
                {/* <a href="">{n}</a> */}
                <Link to={`/${n}`}>{n}</Link>
              </li>
            ))}
          </ul>
          <div class="flex justify-center md:justify-end items-center gap-2 py-4 px-6 md:px-20">
            <div class="flex items-center gap-1 text-gray-800 cursor-pointer">
              <div class="bg-black text-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.779.755 6.879 2.042M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <a href="" target="_blank">
                Log In
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
