import React from "react";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import NewDrops from "../components/NewDrops";


const App = () => {
  return (
    <>
     
      <HeroSection />
      <Banner />
      <NewDrops />
      <section class="grid grid-cols-1 md:grid-cols-9 mb-10">
        <div class="col-span-9 md:col-span-6 h-40 md:h-auto bg-gradient-to-b from-white to-[#E6E6FA] p-10 text-black flex items-center flex-col justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 mt-3"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <p class="text-xl mt-3">SALE IS ON!</p>
          <h1 class="text-6xl mt-3 md:text-9xl font-extrabold">25% OFF</h1>
          <p class="text-sm md:text-base mt-3 pb-10">
            25% off sitewide using <strong>TEES25</strong> at checkout
          </p>
        </div>
        <div class="col-span-9 md:col-span-3 h-40 md:h-auto overflow-hidden">
          <img
            src="src/assets/img.avif"
            alt=""
            class="w-full md:h-[700px] h-[300px] object-fit hover:scale-110 transition-all"
          />
        </div>
      </section>
      {/* <Section end  */}

      <section class="flex justify-center items-center text-5xl md:mt-10 font-semibold p-4">
        GET 10% OFF YOUR FIRST ORDER!
      </section>
     
    </>
  );
};

export default App;
