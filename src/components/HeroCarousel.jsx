import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [hero1, hero2, hero3];

const HeroCarousel = () => {
  return (
    <section className="w-full aspect-[16/9] md:h-[80vh] overflow-hidden">
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
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;


