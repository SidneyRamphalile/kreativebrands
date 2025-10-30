import React, { useRef, useEffect } from "react";
import hero1 from "../assets/hero1A.jpg";
import hero2 from "../assets/hero2B.jpg";
import hero3 from "../assets/hero3C.jpg";
import hero4 from "../assets/hero4D.jpg";
import hero5 from "../assets/hero5E.jpeg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scroll = 0;
    let req;

    // Calculate width of one set of slides (original only)
    const singleSetWidth = Array.from(container.children)
      .slice(0, slides.length)
      .reduce(
        (acc, el) =>
          acc +
          el.offsetWidth +
          parseInt(getComputedStyle(el).marginRight || 0),
        0
      );

    const speed = 0.5; // pixels per frame, adjust for speed

    const animate = () => {
      scroll += speed;

      // Reset scroll when we've scrolled exactly one set of images
      // This creates seamless looping
      if (scroll >= singleSetWidth) {
        scroll = 0;
      }

      container.style.transform = `translateX(-${scroll}px)`;
      req = requestAnimationFrame(animate);
    };

    req = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div ref={containerRef} className="flex">
        {[...slides, ...slides].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`hero-${idx % slides.length}`} // Better alt text
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mr-4 flex-none object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
