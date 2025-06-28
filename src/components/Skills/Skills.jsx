import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-16 bg-base-300 rounded-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <p className="text-gray-500 mt-2">Technologies I work with</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 justify-center">
          {/* Frontend */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 text-primary">Frontend</h3>
            <div className="grid grid-cols-3 gap-4 text-4xl text-primary">
              <div className="tooltip" data-tip="HTML">
                <FaHtml5 />
              </div>
              <div className="tooltip" data-tip="CSS">
                <FaCss3Alt />
              </div>
              <div className="tooltip" data-tip="JavaScript">
                <FaJs />
              </div>
              <div className="tooltip" data-tip="React">
                <FaReact />
              </div>
              <div className="tooltip" data-tip="Tailwind CSS">
                <SiTailwindcss />
              </div>
              <div className="tooltip" data-tip="DaisyUI">
                🌼
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 text-primary">Backend</h3>
            <div className="grid grid-cols-3 gap-4 text-4xl text-primary">
              <div className="tooltip" data-tip="Node.js">
                <FaNode />
              </div>
              <div className="tooltip" data-tip="Express.js">
                <SiExpress />
              </div>
              <div className="tooltip" data-tip="MongoDB">
                <SiMongodb />
              </div>
              <div className="tooltip" data-tip="Firebase">
                <SiFirebase />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 text-primary">Tools</h3>
            <div className="grid grid-cols-3 gap-4 text-4xl text-primary">
              <div className="tooltip" data-tip="Git">
                <FaGitAlt />
              </div>
              <div className="tooltip" data-tip="GitHub">
                🐙
              </div>
              <div className="tooltip" data-tip="VS Code">
                🧠
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
