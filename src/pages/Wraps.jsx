import React from "react";
import { Link } from "react-router-dom";
import wraps from "../assets/free-gift-wrapping-paper-mockup-2.jpg"; 

// Array of your existing product routes for dynamic linking
const productSuggestions = [
  "/banners",
  "/pylon-signs",
  "/wraps",
  "/billboards",
  "/stickers",
  "/shopfront-signage",
  "/3d-lettering",
  "/lightboxes",
  "/led-digital-signs",
  "/wall-murals-vinyl-decals",
  "/directory-signs",
  "/acrylic-glass-mounted-office-signs",
];

const getRandomSuggestions = (currentPath) => {
  const filtered = productSuggestions.filter((path) => path !== currentPath);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // Show 3 random suggestions
};

const Wraps = () => {
  const suggestions = getRandomSuggestions("/wraps");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Wraps</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={wraps}
            alt="Vehicle Wraps"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Eye-catching vehicle branding
          </h2>
          <p className="text-gray-700">
            Transform your vehicles into mobile billboards with high-quality,
            durable wraps customized to showcase your brand wherever you go.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our vehicle wraps offer a dynamic way to promote your business on the
          move. Made from premium vinyl, these wraps are weather-resistant, easy
          to maintain, and fully customizable to fit any vehicle size or shape.
          Whether you want a full wrap or a partial design, we deliver vibrant
          colors and crisp graphics that turn heads and generate buzz. Ideal for
          business fleets, delivery vehicles, or personal cars, our wraps help
          you build brand awareness everywhere you drive.
        </p>
      </div>

      {/* Request Quote Button */}
      <div className="mb-12 text-center">
        <Link
          to="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* You May Also Like */}
      <div>
        <h3 className="text-2xl font-bold mb-4">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((path, index) => (
            <Link
              to={path}
              key={index}
              className="block border p-4 rounded-lg hover:shadow hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition"
            >
              <h4 className="text-lg font-semibold capitalize">
                {path.replace("/", "")}
              </h4>
              <p className="text-sm text-gray-600">
                View more about {path.replace("/", "")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wraps;
