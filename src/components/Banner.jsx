import React from "react";
import bannerImage1 from '../assets/image1.avif'
import bannerImage2 from '../assets/image2.avif'
import bannerImage3 from '../assets/image3.avif'


const Banner = () => {
    const products =  { img: bannerImage1, alt_name: "Image 1"}
    const products1 = {img: bannerImage2, alt_name: "Image 2"} 
    const products2 = {img: bannerImage3, alt_name: "Image 3"} 
    return (
      <>
        <section className="grid grid-cols-1 md:grid-cols-8 gap-2 px-4 mb-10">
          <div className="col-span-8 md:col-span-2 h-40 md:h-auto overflow-hidden">
            <img
              src={products.img}
              alt={products.alt_name}
              className="w-full h-full object-cover hover:scale-110 transition-all"
            />
          </div>
          <div className="col-span-8 md:col-span-4 h-40 md:h-auto overflow-hidden">
            <img
              src={products2.img}
              alt={products2.alt_name}
              className="w-full h-full object-cover hover:scale-110 transition-all"
            />
          </div>
          <div className="col-span-8 md:col-span-2 h-40 md:h-auto overflow-hidden">
            <img
              src={products1.img}
              alt={products1.alt_name}
              className="w-full h-full object-cover hover:scale-110 transition-all"
            />
          </div>
        </section>
      </>
    );
};

export default Banner;
