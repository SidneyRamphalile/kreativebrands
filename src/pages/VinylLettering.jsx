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

const VinylLettering = () => {
  const suggestions = getRandomSuggestions("/vinyl-lettering");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Vinyl Lettering</h1>

      {/* Image + Description Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/vinyl-lettering.jpg"
            alt="Vinyl Lettering"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Sleek, durable, and highly visible
          </h2>
          <p className="text-gray-700">
            Perfect for windows, vehicles, walls, and signage-our vinyl
            lettering is clean-cut, long-lasting, and tailored to your brand
            message.
          </p>
        </div>
      </div>

      {/* Long Description Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Vinyl lettering is a powerful and cost-effective solution for
          branding, advertising, and decorating both indoor and outdoor spaces.
          Cut from high-quality adhesive vinyl, each letter is precision-crafted
          to deliver a sharp, professional appearance on any flat surface.
          Whether you're displaying your business hours on a shop window,
          creating bold car decals, or adding custom lettering to a wall or
          signboard, our vinyl lettering offers excellent durability, weather
          resistance, and ease of application. Choose from a wide range of
          colors, fonts, and sizes to make your message stand out wherever it's
          placed.
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

export default VinylLettering;
