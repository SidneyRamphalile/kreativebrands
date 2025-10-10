import React from "react";

// Import your project images
import projectA from "../assets/projectA.jpg";
import projectB from "../assets/projectB.jpg";
import projectC from "../assets/projectC.jpg";
import projectD from "../assets/projectD.jpg";
import projectE from "../assets/projectE.jpg";
import projectF from "../assets/projectF.jpg";

const projectImages = [projectA, projectB, projectC, projectD, projectE, projectF]; 

const Projects = () => {
  return (
    <div className="px-4 md:px-12 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-10">
        Below is a gallery of the work we have done for our clients.
      </p>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projectImages.map((image, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
