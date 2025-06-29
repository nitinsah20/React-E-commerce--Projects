import React from "react";
import shirt from "../assets/shirt.avif";
import shirt1 from "../assets/shirt1.avif";
import shirt2 from "../assets/shirt2.avif";
import shirt3 from "../assets/shirt3.avif";

const NewDrops = () => {
  const heading = "New Drops";
  const products = [
    {
      img: shirt,
      alt_name: "Shirt 1",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt1,
      alt_name: "Shirt 2",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt2,
      alt_name: "Shirt 3",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt3,
      alt_name: "Shirt 4",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt2,
      alt_name: "Shirt 4",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt3,
      alt_name: "Shirt 4",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt1,
      alt_name: "Shirt 4",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
    {
      img: shirt,
      alt_name: "Shirt 4",
      paragraph1: "I'm a product",
      paragraph2: "$15.00",
    },
  ];

  return (
    <>

      <h1 className="text-5xl font-bold text-center mt-10">{heading}</h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-20 px-4 m-10">
        {products.map((p) => (
          <div className="md:h-auto">
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.alt_name}
                className="w-full h-full object-cover hover:scale-110 transition-all"
              />
            </div>
            <p className="text-lg font-[350] text-black">{p.paragraph1}</p>
            <p>{p.paragraph2}</p>
          </div>
        ))}
      </section>

      <div className="flex justify-center items-center mb-20">
        <button className="w-auto mx-auto bg-black text-white p-4 px-10">
          SHOP NEW
        </button>
      </div>
    </>
  );
};

export default NewDrops;
