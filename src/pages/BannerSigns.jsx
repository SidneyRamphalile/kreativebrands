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

const BannerSigns = () => {
  const suggestions = getRandomSuggestions("/banner-signs");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Banner Signs (PVC, Mesh, Fabric)
      </h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/banner-signs.jpg"
            alt="Banner Signs"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Flexible signage for every setting
          </h2>
          <p className="text-gray-700">
            From PVC to mesh and fabric, our banner signs offer vibrant,
            durable, and versatile branding for both indoor and outdoor use.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our banner signs are available in a variety of materials to suit your
          environment and branding needs. Whether you need rugged PVC for
          outdoor durability, breathable mesh for windy conditions, or elegant
          fabric for indoor events, we've got you covered. Each banner is
          printed in high resolution with UV-resistant inks for maximum visual
          impact and longevity. Choose from a wide range of sizes and finishing
          options such as eyelets, hems, and pole pockets to fit your
          installation needs. Ideal for promotions, events, construction sites,
          and storefronts, these banners are a powerful and portable signage
          solution.
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

export default BannerSigns;
