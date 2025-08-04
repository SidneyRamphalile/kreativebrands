import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeScroller = () => {
  return (
    <div className="py-4 bg-gray-100 border-y border-gray-300">
      <Marquee direction="left" speed={50} pauseOnHover gradient={false}>
        <span className="mx-8 text-lg font-semibold text-indigo-800 whitespace-nowrap">
          🖼️ Custom Banners & Posters
        </span>
        <span className="mx-8 text-lg font-semibold text-blue-800 whitespace-nowrap">
          🏪 Outdoor & Indoor Signage Experts
        </span>
        <span className="mx-8 text-lg font-semibold text-green-700 whitespace-nowrap">
          🚚 Fast Turnaround & Delivery
        </span>
        <span className="mx-8 text-lg font-semibold text-red-700 whitespace-nowrap">
          🎨 Stunning Designs that Turn Heads
        </span>
        <span className="mx-8 text-lg font-semibold text-purple-700 whitespace-nowrap">
          🪧 Shopfront Signage | Lightboxes | LED Boards
        </span>
        <span className="mx-8 text-lg font-semibold text-orange-700 whitespace-nowrap">
          📞 Contact Us Today for a Free Quote!
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeScroller;
