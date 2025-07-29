import React from "react";

const ProjectCard = ({ image, title, description, tech, demoLink, codeLink }) => {
  return (
    <div className="bg-white border shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 w-full flex flex-col justify-between">

      <img loading="lazy"
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-auto pt-4 border-t">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md text-sm hover:bg-indigo-100 transition"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
