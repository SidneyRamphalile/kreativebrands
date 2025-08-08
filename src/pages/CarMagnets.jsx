import React from "react";
import { Link } from "react-router-dom";
import carMagnetsImage from "../assets/Car magnets.jpg";

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
  "/acrylic-glass-mounted-office-signs",
];
const getRandomSuggestions = (currentPath) => {
  const filtered = productSuggestions.filter((path) => path !== currentPath);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // Show 3 random suggestions
};

const CarMagnets = () => {
  const suggestions = getRandomSuggestions("/car-magnets");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Car Magnets</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={carMagnetsImage}
            alt="Car Magnets"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Mobile branding made easy
          </h2>
          <p className="text-gray-700">
            Turn your vehicle into a moving billboard with high-quality,
            removable car magnets. Perfect for small businesses, deliveries, and
            service vehicles.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Car magnets are a cost-effective way to advertise your business on the
          go. Printed in full color on durable magnetic sheets, these signs are
          easy to apply, remove, and reuse without damaging your vehicle's
          paint. Ideal for business owners who use personal vehicles or for
          temporary promotions, our car magnets offer great visibility wherever
          you drive. Available in various sizes and fully customizable with your
          logo, contact details, and brand message. Make every trip count with
          professional-grade mobile signage.
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

export default CarMagnets;
