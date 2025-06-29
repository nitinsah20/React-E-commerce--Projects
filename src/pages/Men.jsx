import React from "react";


import data from "../Utility/data.json";
const Men = () => {
  const products = data
    .filter((product) => product.type === "Men Shirt")
    .slice(0, 8);
  return (
    <div>
      <section>
        <div className="font-light flex items-center px-8 py-6 p-5">
          <p className="font-light px-8">Home - Men</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="grid-cols-1 md:col-span-2">
            <p className="text-2xl font-extralight px-8 p-2 underline decoration-1 underline-offset-[20px]">
              Browse by
            </p>

            <ul className="font-light px-14 mt-6">
              <li>
                <a href="#" className="hover:underline">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Drops
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Men
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-10">
            <div className="pt-4">
              <h1 className="text-6xl text-center md:text-start font-extrabold">
                Men
              </h1>
              <p className=" px-4 md:text-md text-gray-700 mt-12">{`Total Products: ${products.length}`}</p>
              <div className="text-sm text-gray-700 md:flex justify-start md:justify-end md:items-center font-light px-4 md:px-20">
                Sort by:
                <select name="" id="">
                  <option value="">Recommended</option>
                  <option value="">Price (Low tO High)</option>
                  <option value="">Price (High tO Low)</option>
                  <option value="">Name A-Z</option>
                  <option value="">Name Z-A</option>
                </select>
              </div>
              <section className="grid grid-cols-1 md:grid-cols-4 gap-20 px-4 m-10">
                {products.map((p) => (
                  <div className="md:h-auto">
                    <div className="overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.type}
                        className="w-full h-full object-cover hover:scale-110 transition-all"
                      />
                    </div>
                    <p className="text-lg font-sans text-black">
                      {p.ProductName}
                    </p>
                    <span>{`₹${p.newprice}`}</span>
                    <span className="line-through px-2 text-slate-400">{`₹${p.oldprice}`}</span>
                    <p className="h-[78px] overflow-hidden text-[#737373]">
                      {p.description}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Men;
