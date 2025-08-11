import React from "react";
import { Link } from "react-router-dom";
import PylonSignsImage from "../assets/Pylon signs.jpg"; 

// Array of your existing product routes for dynamic linking
const productSuggestions = [
  "/banners",
  "/pylon-signs",
  "/wall-mounted-signs",
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

const PylonSigns = () => {
  const suggestions = getRandomSuggestions("/pylon-signs");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Pylon Signs (Totem Signs)</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={PylonSignsImage}
            alt="Pylon Signs"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Stand tall and stand out
          </h2>
          <p className="text-gray-700">
            Our pylon signs (totem signs) are built for maximum visibility and
            brand elevation. Durable, elegant, and strategically placed to
            attract attention from afar.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Pylon signs, also known as totem signs, are freestanding structures
          designed to capture attention from a distance. Ideal for commercial
          properties, shopping centers, and corporate parks, these signs offer
          excellent visibility and long-lasting durability. We design and
          manufacture customized pylon signs tailored to your brand's identity,
          using high-quality materials and weather-resistant finishes. Whether
          illuminated or non-illuminated, pylon signs are a powerful tool to
          guide, inform, and make a lasting impression.
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

export default PylonSigns;
