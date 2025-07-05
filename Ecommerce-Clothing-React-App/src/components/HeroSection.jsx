import React from "react";


const HeroSection = () => {
    const hero_section = [
      { heading: "T Shop", paragraph: "There’s One for Everyone" }
    ];

    return (
      <>
        {/* Hero Section */}
        <section className="text-center my-8">
          {hero_section.map((h) => (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold">
                {h.heading}
              </h1>
              
              <p className="bg-[#E6E6FA] inline-block mt-4 text-black font-medium px-6 py-2 rounded text-sm md:text-lg">
                {h.paragraph}
              </p>
            </>
          ))}
        </section>
      </>
    );
};

export default HeroSection;
