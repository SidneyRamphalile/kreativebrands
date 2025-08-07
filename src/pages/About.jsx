import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/Bloemfontein,_Free_State,_South_Africa_(20349855518).jpg"; 

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-10">
          Kreativ Design and Print was founded in 2010 in Bloemfontein, starting
          from a modest one-man setup in a residential apartment. Initially
          focused on outsourced graphic design and signage, the business was
          built on the founder's 15 years of prior industry experience. Despite
          early uncertainties, the guiding principle was to stay focused and
          work hard. Today, that principle remains, and the company has grown
          into a highly reputable, all-round printing and signage leader,
          recognized for excellence, reliability, and industry innovation.
        </p>

        {/* CTA back to Home */}
        <Link
          to="/"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 mb-10"
        >
          Back to Home
        </Link>

        {/* Bigger Responsive Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Kreativ Design and Print"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
