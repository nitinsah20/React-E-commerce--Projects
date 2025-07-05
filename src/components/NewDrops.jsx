import React from "react";
import data from "../Utility/data.json"
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const NewDrops = () => {
  const { onAddToCart } = useOutletContext(); 
  const heading = "New Drops";
  
  const products = data.filter((product) => ["Men Shirt", "Men T-Shirt", "Women T-Shirt", "Women Top"].includes(product.type)).splice(0, 8);

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-10">{heading}</h1>
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
            <p className="text-lg font-sans text-black">{p.ProductName}</p>
            <span>{`₹${p.newprice}`}</span>
            <span className="line-through px-2 text-slate-400">{`₹${p.oldprice}`}</span>
            <p className="h-[78px] overflow-hidden text-[#737373]">
              {p.description}
            </p>
            <button
              onClick={onAddToCart}
              className="bg-green-400 w-full p-2 hover:bg-green-300 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <div className="flex justify-center items-center mb-20">
        <Link to="/new" className="">
          <button className="w-auto cursor-pointer mx-auto bg-black text-white p-4 px-10 hover:bg-[#E6E6FA] hover:text-black transition-all hover:translate-1.5">
            SHOP NEW
          </button>
        </Link>
      </div>
    </>
  );
};

export default NewDrops;
