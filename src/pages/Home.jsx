import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import MarqueeScroller from "../components/MarqueeScroller";
import ContactUs from "../components/ContactUs";

const Home = () => {
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
            "Shopfront Signs",
            "Vehicle Branding",
            "Posters & Banners",
            "Canvas Printing",
            "LED Lightboxes",
            "Window Decals",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={700 + index * 100}
            >
              <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                {service}
              </h4>
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
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Replace with real image paths */}
          <img
            src="/sample1.jpg"
            alt="Project 1"
            className="rounded shadow-md object-cover h-60 w-full"
            data-aos="flip-left"
            data-aos-delay="1100"
          />
          <img
            src="/sample2.jpg"
            alt="Project 2"
            className="rounded shadow-md object-cover h-60 w-full"
            data-aos="flip-left"
            data-aos-delay="1200"
          />
          <img
            src="/sample3.jpg"
            alt="Project 3"
            className="rounded shadow-md object-cover h-60 w-full"
            data-aos="flip-left"
            data-aos-delay="1300"
          />
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
        <button className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
          Request a Quote
        </button>
      </div>

      {/* Contact Us Section */}
      <div data-aos="fade-up" data-aos-delay="350" id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
