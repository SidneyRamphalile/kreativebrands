import React from "react";
import { Link } from "react-router-dom";
import billboardsImage from "../assets/Billboards.jpg"; 

const productSuggestions = [
  "/banners",
  "/pylon-signs",
  "/wall-mounted-signs",
  "/monument-signs",
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
  return shuffled.slice(0, 3);
};

const Billboards = () => {
  const suggestions = getRandomSuggestions("/billboards");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Billboards</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="w-full md:w-1/2">
          <img
            src={billboardsImage}
            alt="Billboards"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Bold outdoor advertising
          </h2>
          <p className="text-gray-700">
            Our billboards are designed to make a bold statement in high-traffic
            areas. Durable, weatherproof, and customized to your brand's vision.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our billboard printing service provides you with large-scale outdoor
          advertising that captures attention and drives visibility. Whether
          you're promoting a product, event, or service, our billboards are
          built to withstand the elements while maintaining vibrant color and
          clarity. Available in various sizes, we offer full customization to
          align with your brand's aesthetic. Ideal for highways, cityscapes, or
          local campaigns, our billboards offer high-impact advertising with
          long-term results.
        </p>
      </div>

      <div className="mb-12 text-center">
        <Link
          to="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow transition"
        >
          Request a Quote
        </Link>
      </div>

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

export default Billboards;
