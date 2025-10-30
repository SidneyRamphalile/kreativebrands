// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import hero1 from "../assets/hero1A.jpg";
// import hero2 from "../assets/hero2B.jpg";
// import hero3 from "../assets/hero3C.jpg";

// const slides = [hero1, hero2, hero3];

// const HeroCarousel = () => {
//   return (
//     <section className="w-full aspect-[16/9] md:h-[80vh] overflow-hidden">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="w-full h-full"
//       >
//         {slides.map((image, idx) => (
//           <SwiperSlide key={idx}>
//             <div
//               className="w-full h-full bg-center bg-no-repeat bg-contain"
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroCarousel;

import React, { useRef, useEffect, useState } from "react";
import hero1 from "../assets/hero1A.jpg";
import hero2 from "../assets/hero2B.jpg";
import hero3 from "../assets/hero3C.jpg";
import hero4 from "../assets/hero4D.jpg";
import hero5 from "../assets/hero5E.jpeg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  const containerRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstSet = Array.from(containerRef.current.children).slice(
        0,
        slides.length
      );
      const totalWidth = firstSet.reduce(
        (acc, el) =>
          acc + el.offsetWidth + parseInt(getComputedStyle(el).marginRight),
        0
      );
      setScrollDistance(totalWidth);
    }
  }, []);

  // Scroll speed in px/sec
  const speed = 100; // adjust as needed
  const duration = scrollDistance / speed;

  return (
    <section className="w-full overflow-hidden py-4">
      <div
        ref={containerRef}
        className="flex"
        style={{
          animation: scrollDistance
            ? `marquee ${duration}s linear infinite`
            : "none",
        }}
      >
        {[...slides, ...slides].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`hero-${idx}`}
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mr-4 flex-none"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;





