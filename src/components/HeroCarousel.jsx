import React from "react";
import hero1 from "../assets/hero1A.jpg";
import hero2 from "../assets/hero2B.jpg";
import hero3 from "../assets/hero3C.jpg";
import hero4 from "../assets/hero4D.jpg";
import hero5 from "../assets/hero5E.jpeg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {slides.map((img, idx) => (
          <img
            key={`first-${idx}`}
            src={img}
            alt={`hero-${idx}`}
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mr-4 flex-none object-contain"
          />
        ))}
        {/* Duplicate set */}
        {slides.map((img, idx) => (
          <img
            key={`second-${idx}`}
            src={img}
            alt={`hero-${idx}`}
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mr-4 flex-none object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
