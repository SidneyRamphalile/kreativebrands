import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/Kreativ-Logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll helper
  const smoothScrollTo = (targetId, duration = 1200) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // easeInOutQuad

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

  const navItems = [
    {
      title: "Outdoor Signage",
      dropdown: [
        { name: "Billboards", path: "/billboards" },
        { name: "Pylon signs (Totem signs)", path: "/pylon-signs" },
        { name: "Wall-mounted signs", path: "/wall-mounted-signs" },
        { name: "Monument signs", path: "/monument-signs" },
        { name: "Shopfront signage", path: "/shopfront-signage" },
        { name: "3D Lettering (Acrylic, Metal, PVC)", path: "/3d-lettering" },
        { name: "Lightboxes", path: "/lightboxes" },
        { name: "LED digital signs", path: "/led-digital-signs" },
        { name: "Banner signs (PVC, mesh, fabric)", path: "/banner-signs" },
      ],
    },
    {
      title: "Indoor Signage",
      dropdown: [
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
        { name: "Frosted window vinyl", path: "/frosted-window-vinyl" },
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
    {
      title: "Shop",
      url: "https://cemeqp-iu.myshopify.com/",
    },
    {
      title: "Contact Us",
    },
  ];

  // Handle click for Contact Us nav item
  const handleContactClick = (e) => {
    e.preventDefault();
    setOpenMenu(false);
    if (location.pathname === "/") {
      smoothScrollTo("contact", 1200);
    } else {
      navigate("/contact");
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col space-y-4">
        {/* Top Row: Logo + Social Icons + Hamburger */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              <img
                src={logo}
                alt="Kreativ Design Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden text-2xl text-white"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Social Media Icons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578710158593"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/kreativdesign_print/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@kreativdesignprint"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/company/kreativ-design-print/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 w-full flex-wrap">
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
                  <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    {item.dropdown.map(({ name, path }, i) => (
                      <Link
                        to={path}
                        key={i}
                        className="block px-4 py-2 transition-colors duration-200 hover:bg-red-500 hover:text-black"
                        onClick={() => setOpenMenu(false)}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 w-full transition-colors duration-200"
                >
                  {item.title}
                </a>
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
                  to="/"
                  className="block px-4 py-2 w-full transition-colors duration-200"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Items */}
        {openMenu && (
          <div className="md:hidden mt-2 space-y-2 w-full">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <details className="bg-white text-black rounded overflow-hidden">
                    <summary className="cursor-pointer px-4 py-2 font-medium bg-gray-100 hover:bg-red-500 hover:text-black transition-colors duration-200">
                      {item.title}
                    </summary>
                    <div className="px-4 py-2">
                      {item.dropdown.map(({ name, path }, i) => (
                        <Link
                          to={path}
                          key={i}
                          className="block py-1 text-sm transition-colors duration-200 hover:bg-red-500 hover:text-black"
                          onClick={() => setOpenMenu(false)}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : item.url ? (
                  <a
                    href={item.url}
                    className="block px-4 py-2 bg-white text-black rounded hover:bg-red-500 hover:text-black transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpenMenu(false)}
                  >
                    {item.title}
                  </a>
                ) : item.title === "Contact Us" ? (
                  <a
                    href="#contact"
                    className="block px-4 py-2 bg-white text-black rounded hover:bg-red-500 hover:text-black transition-colors duration-200 cursor-pointer"
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
                    to="/"
                    className="block px-4 py-2 bg-white text-black rounded hover:bg-red-500 hover:text-black transition-colors duration-200"
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
