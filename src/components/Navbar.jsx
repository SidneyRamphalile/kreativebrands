import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { Search } from "lucide-react";
import logo from "../assets/Kreativ-Logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const smoothScrollTo = (targetId, duration = 1200) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run =
        ease(Math.min(timeElapsed / duration, 1)) * distance + startPosition;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // ✅ Added “Our Projects” just before Contact Us
  const navItems = [
    {
      title: "Signage",
      dropdown: [
        { name: "Billboards", path: "/billboards" },
        { name: "Pylon signs (Totem signs)", path: "/pylon-signs" },
        { name: "Wall-mounted signs", path: "/wall-mounted-signs" },
        { name: "Monument signs", path: "/monument-signs" },
        { name: "Shopfront signage", path: "/shopfront-signage" },
        { name: "3D Lettering (Acrylic, Metal, PVC)", path: "/3d-lettering" },
        { name: "Lightboxes", path: "/lightboxes" },
        { name: "LED digital signs", path: "/led-digital-signs" },
        { name: "Reception signs", path: "/reception-signs" },
        {
          name: "Wall murals & vinyl decals",
          path: "/wall-murals-vinyl-decals",
        },
        { name: "Directory signs", path: "/directory-signs" },
        { name: "Wayfinding signage", path: "/wayfinding-signage" },
        {
          name: "Acrylic or glass-mounted office signs",
          path: "/acrylic-glass-mounted-office-signs",
        },
        { name: "Retail point-of-sale signage", path: "/retail-pos-signage" },
        { name: "Hanging signs (suspended)", path: "/hanging-signs" },
      ],
    },
    {
      title: "Window & Door Signage",
      dropdown: [
        { name: "Vinyl lettering", path: "/vinyl-lettering" },
        {
          name: "Perforated window graphics (One-way vision)",
          path: "/perforated-window-graphics",
        },
        { name: "Frosted vinyl (sandblast effect)", path: "/frosted-vinyl" },
        { name: "Contra-vision decals", path: "/contra-vision-decals" },
      ],
    },
    {
      title: "Vehicle Branding",
      dropdown: [
        { name: "Car magnets", path: "/car-magnets" },
        { name: "Vinyl cut decals", path: "/vinyl-cut-decals" },
        {
          name: "Full or partial vehicle wraps",
          path: "/full-partial-vehicle-wraps",
        },
        { name: "Fleet branding", path: "/fleet-branding" },
      ],
    },
    {
      title: "Large Format Printing",
      dropdown: [
        { name: "PVC", path: "/pvc" },
        { name: "Stickers", path: "/stickers" },
        { name: "Banners", path: "/banners" },
        { name: "Wallpapers", path: "/wallpapers" },
        { name: "Wraps", path: "/wraps" },
      ],
    },
    { title: "Our Projects", path: "/projects" }, // ✅ added here
    { title: "Contact Us" },
  ];

  const allProducts = navItems.flatMap((item) =>
    item.dropdown ? item.dropdown : []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim()) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const match = allProducts.find((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      navigate(match.path);
    } else {
      navigate("/not-found");
    }
    setSearchQuery("");
    setSuggestions([]);
    setMobileSearchOpen(false);
  };

  const handleSuggestionClick = (product) => {
    navigate(product.path);
    setSearchQuery("");
    setSuggestions([]);
    setMobileSearchOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpenMenu(false);
    if (location.pathname === "/") {
      smoothScrollTo("contact", 1200);
    } else {
      navigate("/contact");
    }
  };

  const handleRequestQuote = () => {
    navigate("/contact");
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Row */}
        <div className="w-full flex justify-between items-center space-x-6 py-3">
          <Link
            to="/"
            onClick={() => setOpenMenu(false)}
            className="flex-shrink-0"
          >
            <img src={logo} alt="Kreativ Design Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop: Request a Quote + Search */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              onClick={handleRequestQuote}
              className="bg-red-600 text-white font-semibold rounded-full px-5 py-2 text-lg hover:bg-red-700 animate-glow"
              style={{
                animation: "glow 2.5s ease-in-out infinite",
                boxShadow:
                  "0 0 10px #ef4444, 0 0 20px #dc2626, 0 0 30px #b91c1c",
              }}
            >
              Request a Quote
            </button>

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="px-3 py-2 rounded-full w-64 border border-white bg-transparent text-white placeholder-white"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400"
              >
                <Search size={18} />
              </button>

              {suggestions.length > 0 && (
                <ul className="absolute bg-white text-black mt-1 w-full rounded-lg shadow-lg z-50">
                  {suggestions.map((product, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(product)}
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>

          {/* Mobile: Search Icon + Hamburger */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="text-white"
            >
              <Search size={22} />
            </button>

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-2xl text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {mobileSearchOpen && (
          <div className="md:hidden w-full mb-2">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="px-3 py-2 rounded-full w-full border border-white bg-transparent text-white placeholder-white"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400"
              >
                <Search size={18} />
              </button>
              {suggestions.length > 0 && (
                <ul className="absolute bg-white text-black mt-1 w-full rounded-lg shadow-lg z-50">
                  {suggestions.map((product, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(product)}
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        )}

        {/* Desktop Nav Items */}
        <div className="hidden md:flex justify-center items-center space-x-6 w-full">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded transition-colors duration-200 hover:bg-red-500 hover:text-black"
            >
              {item.dropdown ? (
                <>
                  <button className="w-full px-4 py-2 text-left cursor-default">
                    {item.title}
                  </button>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    {item.dropdown.map(({ name, path }, i) => (
                      <Link
                        key={i}
                        to={path}
                        className="block px-4 py-2 transition-colors duration-200 hover:bg-red-500 hover:text-black"
                        onClick={() => setOpenMenu(false)}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : item.title === "Contact Us" ? (
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="block px-4 py-2 w-full rounded transition-colors duration-200 hover:bg-red-500 hover:text-black cursor-pointer"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  to={item.path || "/"}
                  className="block px-4 py-2 w-full transition-colors duration-200"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="md:hidden mt-2 space-y-2 w-full">
            {navItems.map((item, index) => (
              <div key={index} className="w-full flex flex-col items-start">
                {item.dropdown ? (
                  <details className="bg-white text-black rounded overflow-hidden w-full">
                    <summary className="cursor-pointer px-4 py-2 font-medium bg-gray-100 hover:bg-red-500 hover:text-black transition-colors duration-200 w-full">
                      {item.title}
                    </summary>
                    <div className="px-4 py-2 w-full">
                      {item.dropdown.map(({ name, path }, i) => (
                        <Link
                          key={i}
                          to={path}
                          className="block py-1 text-sm transition-colors duration-200 hover:bg-red-500 hover:text-black"
                          onClick={() => setOpenMenu(false)}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : item.title === "Contact Us" ? (
                  <a
                    href="#contact"
                    className="block px-4 py-2 bg-white text-black rounded hover:bg-red-500 hover:text-black transition-colors duration-200 cursor-pointer w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenMenu(false);
                      if (location.pathname === "/") {
                        smoothScrollTo("contact", 1200);
                      } else {
                        navigate("/contact");
                      }
                    }}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.path || "/"}
                    className="block px-4 py-2 bg-white text-black rounded hover:bg-red-500 hover:text-black transition-colors duration-200 w-full"
                    onClick={() => setOpenMenu(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
