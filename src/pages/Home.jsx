import React, { useRef } from "react";
import HeroCarousel from "../components/HeroCarousel";
import MarqueeScroller from "../components/MarqueeScroller";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Image Slider */}
      <div data-aos="fade-down">
        <HeroCarousel />
      </div>

      {/* Marquee Scroller */}
      <div data-aos="fade-up" data-aos-delay="200">
        <MarqueeScroller />
      </div>

      {/* Welcome Message */}
      <div
        className="px-4 py-8 text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Kreativ Design & Print
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We design signs that speak louder than words. From shopfronts to
          vehicle branding, we bring your ideas to life with premium quality
          signage solutions.
        </p>
      </div>

      {/* Services Section */}
      <div
        className="px-4 py-10 bg-white text-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Our Signage Services
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Shopfront Signs",
              image: "/src/assets/Free-Light-Wood-Storefront-Mockup-02.jpg",
            },
            {
              title: "Vehicle Branding",
              image: "/src/assets/free-vehicle-mockup-536x0-c-default.jpg",
            },
            {
              title: "Posters & Banners",
              image:
                "/src/assets/5-Free-X-Stand-Banner-Stand-Mockup-PSD-Files2.jpg",
            },
            {
              title: "Canvas Printing",
              image:
                "/src/assets/free-art-canvas-frame-mockup-psd-536x0-c-default.jpg",
            },
            {
              title: "LED Lightboxes",
              image:
                "/src/assets/Free-Lightbox-Digital-Screen-Poster-Mockup-PSD.jpg",
            },
            {
              title: "Window Decals",
              image:
                "/src/assets/Free-Restaurant-Window-Sign-Decal-Mockup-PSD.jpg",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={700 + index * 100}
            >
              <h4 className="text-xl font-semibold text-red-600 mb-2">
                {service.title}
              </h4>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-3"
              />

              <p className="text-gray-600 text-sm">
                High-quality, durable, and designed to make your brand stand
                out.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        className="px-4 py-10 bg-gray-50 text-center"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Recent Projects
        </h3>
        <p className="text-gray-600 mb-6">
          A glimpse into the signs we've proudly created.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/src/assets/project1.jpg", alt: "Project 1", delay: 1100 },
            { src: "/src/assets/project2.jpeg", alt: "Project 2", delay: 1200 },
            { src: "/src/assets/project3.jpeg", alt: "Project 3", delay: 1300 },
            { src: "/src/assets/project4.jpeg", alt: "Project 4", delay: 1400 },
            { src: "/src/assets/project5.jpeg", alt: "Project 5", delay: 1500 },
            { src: "/src/assets/project6.jpeg", alt: "Project 6", delay: 1600 },
            { src: "/src/assets/project7.jpeg", alt: "Project 7", delay: 1700 },
            { src: "/src/assets/project8.jpg", alt: "Project 8", delay: 1800 },
            { src: "/src/assets/project9.jpeg", alt: "Project 9", delay: 1900 },
          ].map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
              data-aos="flip-left"
              data-aos-delay={project.delay}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="object-cover w-full h-60"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="px-4 py-10 bg-white text-center"
        data-aos="fade-up"
        data-aos-delay="1400"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className="bg-gray-100 p-4 rounded shadow"
            data-aos="fade-right"
            data-aos-delay="1500"
          >
            <p className="text-gray-600 italic">
              "Kreativ brought our shopfront to life. Super fast delivery!"
            </p>
            <p className="text-sm font-bold text-right text-indigo-700 mt-2">
              - Amanda S.
            </p>
          </div>
          <div
            className="bg-gray-100 p-4 rounded shadow"
            data-aos="fade-left"
            data-aos-delay="1600"
          >
            <p className="text-gray-600 italic">
              "Professional and affordable. Will be using them again!"
            </p>
            <p className="text-sm font-bold text-right text-indigo-700 mt-2">
              - Thabo M.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div
        className="bg-red-600 text-white text-center py-10 px-4"
        data-aos="zoom-in"
        data-aos-delay="1700"
      >
        <h3 className="text-2xl font-bold mb-2">
          Need a Quote for Your Signage Project?
        </h3>
        <p className="mb-4">
          Fast turnaround, premium quality, and unbeatable service.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          Request a Quote
        </button>
      </div>

      {/* Contact Us Section */}
      <div data-aos="fade-up" data-aos-delay="350" ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
