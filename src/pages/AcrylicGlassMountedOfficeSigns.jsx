import React from "react";
import { Link } from "react-router-dom";
import acrylicImage from "../assets/Acrylic or glass-mounted office signs.jpg"; 

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
  "/directory-signs",
];

const getRandomSuggestions = (currentPath) => {
  const filtered = productSuggestions.filter((path) => path !== currentPath);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // Show 3 random suggestions
};

const AcrylicGlassMountedOfficeSigns = () => {
  const suggestions = getRandomSuggestions(
    "/acrylic-glass-mounted-office-signs"
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Acrylic or Glass-Mounted Office Signs
      </h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={acrylicImage}
            alt="Acrylic or Glass-Mounted Office Signs"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Elegant and professional signage
          </h2>
          <p className="text-gray-700">
            Make a lasting first impression with sleek acrylic or glass-mounted
            office signs. Perfect for reception areas, meeting rooms, and
            corporate branding.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our acrylic and glass-mounted office signs are crafted to reflect
          professionalism and modern design. Ideal for corporate offices,
          medical suites, and business entrances, these signs combine
          functionality with sophistication. Each sign is fully customizable
          with your logo, nameplates, or directional information. Mounted with
          stand-offs for a premium floating effect, these signs not only enhance
          your space but also reinforce your brand identity. Durable and easy to
          clean, they are suitable for both indoor and semi-outdoor use.
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

export default AcrylicGlassMountedOfficeSigns;
