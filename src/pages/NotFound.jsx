import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/dribbble_1.gif"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Big Image */}
      <img
        src={notFoundImage}
        alt="Lost illustration"
        className="max-w-lg w-full mb-8"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Oops! Looks like you've lost your way 🚀
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-8">
        Don't worry, even the best explorers get lost sometimes.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;


