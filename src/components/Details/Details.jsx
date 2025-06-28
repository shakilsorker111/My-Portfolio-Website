import React from "react";
import { Link, useParams } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../../../public/projects.js";

const Details = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  return (
    <div>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          {project.name}
        </h1>

        {/* Project Image */}
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover rounded-xl shadow mb-8"
        />

        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-gray-700">{project.description}</p>

          {/* Tech Stack */}
          <h2 className="text-2xl font-semibold mt-6">Main Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="badge badge-outline px-3 py-1">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <h2 className="text-2xl font-semibold mt-6">Project Links</h2>
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm flex items-center gap-2"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href={project.frontend}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>

          {/* Challenges */}
          <h2 className="text-2xl font-semibold mt-6">Challenges Faced</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Improvements */}
          <h2 className="text-2xl font-semibold mt-6">
            Potential Improvements & Future Plans
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <Link to="/#projects" className="btn mt-10">
          ← Back to Projects
        </Link>
      </section>
    </div>
  );
};

export default Details;
