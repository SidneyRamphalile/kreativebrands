import React from "react";
import { Link } from "react-router-dom";
import directorySigns from "../assets/Directory signs.jpg"; 

// Array of your existing product routes for dynamic linking
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
  "/hanging-signs",
  "/acrylic-glass-mounted-office-signs",
];

const getRandomSuggestions = (currentPath) => {
  const filtered = productSuggestions.filter((path) => path !== currentPath);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // Show 3 random suggestions
};

const DirectorySigns = () => {
  const suggestions = getRandomSuggestions("/directory-signs");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Directory Signs</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={directorySigns}
            alt="Directory Signs"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Guide your visitors with clarity
          </h2>
          <p className="text-gray-700">
            Our directory signs are designed to provide clear, professional, and
            organized wayfinding in office buildings, hospitals, malls, schools,
            and more. Stylish and fully customizable to suit your brand or
            environment.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Help people find their way with our high-quality directory signs.
          Whether it's a floor plan in a corporate building, tenant listings in
          a shopping center, or room identifiers in a clinic, our signage
          solutions make navigation easy. Choose from wall-mounted,
          freestanding, or illuminated options. Made from durable materials like
          brushed aluminum, acrylic, or PVC, these signs offer long-lasting
          performance and a sleek, modern look. Perfect for internal and
          external use, each sign can be customized with your company logo,
          color scheme, and typography.
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
                {path.replace("/", "").replace("-", " ")}
              </h4>
              <p className="text-sm text-gray-600">
                View more about {path.replace("/", "").replace("-", " ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorySigns;
