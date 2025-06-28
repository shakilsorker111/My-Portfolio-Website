import React from "react";
import projects from "../../../public/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <div>
      <section className="py-16 bg-base-200 rounded-2xl my-7">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-gray-500 mt-2">A few things I've built recently</p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
