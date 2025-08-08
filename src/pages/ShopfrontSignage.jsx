import React from "react";
import { Link } from "react-router-dom";
import shopfrontSignage from "../assets/Shopfront signage.jpg"; 

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

const ShopfrontSignage = () => {
  const suggestions = getRandomSuggestions("/shopfront-signage");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Shopfront signage</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={shopfrontSignage}
            alt="Shopfront Signage"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Standout storefront branding
          </h2>
          <p className="text-gray-700">
            Our shopfront signage ensures your business gets noticed from the
            street. Custom-designed for visibility and lasting impact, built to
            represent your brand with style.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Make your storefront impossible to ignore with our custom shopfront
          signage solutions. Designed to attract foot traffic and reinforce
          brand identity, our signage combines durability, style, and
          visibility. Whether you're launching a new store, rebranding, or
          updating your current signage, we deliver high-impact results that
          align with your business image. Choose from a variety of materials,
          finishes, and mounting options to create signage that speaks volumes
          before customers even step inside.
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
              className="block border p-4 rounded-lg hover:shadow transition"
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

export default ShopfrontSignage;
