import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const slides = [hero1, hero2, hero3];

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;

// HeroCarousel.js
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// import hero1 from "../assets/hero1.png";
// import hero2 from "../assets/hero2.png";
// import hero3 from "../assets/hero3.png";

// const slides = [hero1, hero2, hero3];

// const HeroCarousel = () => {
//   return (
//     <section className="w-full relative">
//       <Swiper
//         modules={[Navigation, Autoplay, EffectFade]}
//         navigation
//         effect="fade"
//         autoplay={{ delay: 5000 }}
//         loop
//         className="aspect-[16/9] md:h-[80vh] w-full"
//       >
//         {slides.map((image, idx) => (
//           <SwiperSlide key={idx} className="relative">
//             <img
//               src={image}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center px-4">
//               <div>
//                 <h1 className="text-xl md:text-4xl font-bold mb-4">Your Heading</h1>
//                 <p className="text-sm md:text-lg mb-4">Your subheading or CTA message goes here.</p>
//                 <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
//                   Call to Action
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroCarousel;
