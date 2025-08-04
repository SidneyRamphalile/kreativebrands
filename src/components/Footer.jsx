import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/Kreativ-Logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
              <a
                href="#about"
                className="hover:text-red-500 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </a>
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
              className="text-gray-300 hover:text-yellow-400 text-xl transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/kreativdesign_print/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 text-xl transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@kreativdesignprint"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 text-xl transition-colors duration-200"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/company/kreativ-design-print/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 text-xl transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} Kreativ Design & Print. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
