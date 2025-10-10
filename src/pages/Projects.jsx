import React from "react";

// Import your project images
import projectA from "../assets/projectA.jpg";
import projectB from "../assets/projectB.jpg";
import projectC from "../assets/projectC.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";
import project7 from "../assets/project7.jpeg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpeg";
    


const projectImages = [projectA, projectB, projectC, project1, project2, project3, project4, project5, project6, project7, project8, project9]; 

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
