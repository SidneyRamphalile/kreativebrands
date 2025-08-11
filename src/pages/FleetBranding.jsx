import { Link } from "react-router-dom";
import FleetBrandingImage from "../assets/Fleet branding.jpg"; 

// Dynamic product suggestions, excluding current page
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

const FleetBranding = () => {
  const suggestions = getRandomSuggestions("/fleet-branding");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Fleet Branding</h1>

      {/* Image + Description Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={FleetBrandingImage}
            alt="Fleet branding vehicle wrap"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Short Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">
            Transform your vehicles into moving billboards
          </h2>
          <p className="text-gray-700">
            Fleet branding offers high-impact mobile advertising by turning your
            company vehicles into attention-grabbing designs. Whether for
            delivery vans or entire fleets, our wraps are professional,
            eye-catching, and built to last.
          </p>
        </div>
      </div>

      {/* Detailed Product Description */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our fleet branding solutions provide your business with 24/7 mobile
          exposure. Using premium-grade vinyl and expert installation, your
          message stays sharp and vibrant through all weather conditions.
          Custom-designed to reflect your brand identity, fleet wraps are a
          cost-effective and powerful way to advertise on the go. Whether it's
          full wraps, partial wraps, or decals, we tailor each project to your
          vehicle type and marketing goals.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-12 text-center">
        <Link
          to="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* Suggestion Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((path, index) => {
            const label = path.replace("/", "").replace("-", " ");
            const formatted = label
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");

            return (
              <Link
                to={path}
                key={index}
                className="block border p-4 rounded-lg hover:shadow hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition"
              >
                <h4 className="text-lg font-semibold">{formatted}</h4>
                <p className="text-sm text-gray-600">
                  View more about {formatted}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FleetBranding;
