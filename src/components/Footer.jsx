import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Kreativ-Logo.png";

const Footer = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 text-white">
      <footer className="px-6 py-10 max-w-screen-2xl mx-auto">
        {/* Change grid-cols-4 to grid-cols-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Kreativ Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-300">
              Kreativ Design & Print is your one-stop creative hub for signage,
              branding, and print solutions that make your business stand out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-red-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" className="hover:text-red-500">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/banners" className="hover:text-red-500">
                  Banners
                </Link>
              </li>
              <li>
                <Link to="/car-magnets" className="hover:text-red-500">
                  Car Magnets
                </Link>
              </li>
              <li>
                <Link to="/reception-signs" className="hover:text-red-500">
                  Reception Signs
                </Link>
              </li>
              <li>
                <Link to="/lightboxes" className="hover:text-red-500">
                  Lightboxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578710158593"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-yellow-400 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/kreativdesign_print/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-yellow-400 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@kreativdesignprint"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-yellow-400 text-xl"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/company/kreativ-design-print/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-yellow-400 text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* New Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-red-500" />
                <a href="tel:+27696684616" className="hover:text-red-500">
                  +27 69 668 4616
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-500" />
                <a
                  href="mailto:info@kreativebrands.co.za"
                  className="hover:text-red-500"
                >
                  info@kreativebrands.co.za
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-red-500" />
                <address className="not-italic">
                  63 Aliwal Street
                  <br />
                  Opposite VW
                  <br />
                   Shop 1 Inez Court
                  <br />
                  Bloemfontein
                  <br />
                  9301
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-800 pt-4">
          &copy; {new Date().getFullYear()} Kreativ Design & Print. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
