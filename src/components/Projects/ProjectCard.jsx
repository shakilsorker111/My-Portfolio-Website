import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 4000); // 3 seconds
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="bg-white rounded-xl shadow border hover:shadow-lg transition duration-300 overflow-hidden flex flex-col md:flex-row max-w-3/4 mx-auto">
      {/* Slideshow Image Section */}
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden my-auto">
        <img
          src={project.images[currentImage]}
          alt={project.name}
          className="w-full h-72 object-fit object-center transition duration-700 ease-in-out"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span key={i} className="badge badge-outline text-xs px-2 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={project.live}
            target="_blank"
            className="btn btn-sm btn-success"
          >
            Live <FaExternalLinkAlt />
          </a>
          <a
            href={project.frontend}
            target="_blank"
            className="btn btn-sm btn-outline"
          >
            Frontend Repo <FaGithub />
          </a>
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              className="btn btn-sm btn-outline"
            >
              Backend Repo <FaGithub />
            </a>
          )}
          <Link
            to={`/details/${project.id}`}
            className="btn btn-sm btn-outline"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
