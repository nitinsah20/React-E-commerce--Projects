import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
const Product = () => {
    const { onAddToCart } = useOutletContext(); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ default true
  const [error, setError] = useState(null); // ✅ default null

  const result = data
    .filter((p) => p.type === "Men Shirt" || "Women Top")
    .slice(0, 26);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setData(response.data);
    } catch (err) {
    //   console.log(`Error` + error);
      setError(err.message);
    } finally {
    //   console.log("ready");
      setLoading(false);
    }

   
    //   console.log(response.data)
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 m-10 auto-rows-fr">
        {result.map((u) => (
          <div
            key={u.id}
            className="h-[500px] flex flex-col justify-between border shadow rounded p-3"
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={u.image}
                alt="Product-img"
                className="w-full h-full object-cover hover:scale-110 transition-all"
              />
            </div>
            <p className="text-lg font-sans text-black">{u.category}</p>
            <p className="text-lg font-sans text-black">{u.title}</p>
            <span>{`₹${u.price}`}</span>
            {/* <span className="line-through px-2 text-slate-400">{`₹${u.oldprice}`}</span> */}
            <p className="h-[78px] overflow-hidden text-[#737373]">
              {u.description}
            </p>
            <p className="h-[78px] overflow-hidden text-[#737373]">
              Rating: {u.rating.rate} ⭐ ({u.rating.count})
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
    </div>
  );
}

export default Product

// import React, { useEffect, useState } from "react";
// const Product = ({ onAddToCart }) => {
//   const [product, setproduct] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     async function getdata() {
//       try {
//         const res = await fetch(
//           "https://gist.githubusercontent.com/nitinsah20/6b8e76df889218d80f842a7db9fef838/raw/bb2718afe406edfa3bcb6bd7ac545971508b8757/ProductsData.json"
//         );
//         const data = await res.json();
//         const menshirt = data.filter((p) => p.type === "Men Shirt").slice(0, 8);
//         // console.log("Total:", data.length, "Men Shirt:", menshirt.length);
        
//         setproduct(menshirt);
//       } catch (error) {
//         console.log(error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getdata();
//   }, []);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-4 gap-20 px-4 m-10">
//       {product.map((u) => (
//         <div key={u.id}  className="md:h-auto">
//           <div className="overflow-hidden">
//             <img
//               src={u.img}
//               alt={u.type}
//               className="w-full h-full object-cover hover:scale-110 transition-all"
//             />
//           </div>
//           <p className="text-lg font-sans text-black">{u.ProductName}</p>
//           <span>{`₹${u.newprice}`}</span>
//           <span className="line-through px-2 text-slate-400">{`₹${u.oldprice}`}</span>
//           <p className="h-[78px] overflow-hidden text-[#737373]">
//             {u.description}
//           </p>
//           <button
//             onClick={onAddToCart}
//             className="bg-green-400 w-full p-2 hover:bg-green-300 cursor-pointer"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Product
