import React from "react";
import { Link } from "react-router-dom";

// Array of your existing product routes for dynamic linking
const productSuggestions = [
  "/banners",
  "/flyers",
  "/signboards",
  "/posters",
  "/stickers",
];

const getRandomSuggestions = (currentPath) => {
  const filtered = productSuggestions.filter((path) => path !== currentPath);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // Show 3 random suggestions
};

const ContraVisionDecals = () => {
  const suggestions = getRandomSuggestions("/contra-vision-decals");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Contra-Vision Decals</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/contra-vision-decals.jpg"
            alt="Contra-Vision Decals"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Innovative one-way vision signage
          </h2>
          <p className="text-gray-700">
            Our contra-vision decals provide privacy and branding by allowing
            visibility from one side while displaying vivid graphics on the
            other.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Contra-vision decals are perforated window graphics designed for
          commercial vehicles, storefronts, and building windows. They allow
          those inside to see out clearly, while displaying your brand, message,
          or advertisement to the outside world. Printed with UV-resistant inks
          on durable vinyl, these decals are weatherproof and long-lasting.
          Ideal for privacy, sun control, and eye-catching advertising without
          sacrificing visibility or natural light. Fully customizable to fit any
          window size or shape.
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

export default ContraVisionDecals;
