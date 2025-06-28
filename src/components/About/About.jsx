import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-base-200 my-7 rounded-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-500 mt-2">Get to know me better</p>
        </div>

        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              Hello! I'm <strong>MD. SAKIL HOSSAIN</strong>, a passionate and
              dedicated <strong>Full Stack Web Developer</strong> from
              Bangladesh. My journey in programming began with curiosity, grew
              with challenges, and became a career I love.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              I specialize in building responsive and interactive web
              applications using <strong>React, Node.js, MongoDB</strong>, and{" "}
              <strong>Tailwind CSS</strong>. I enjoy translating ideas into
              real-world applications with clean UI and efficient code.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              Outside of coding, I enjoy <strong>playing cricket</strong>,
              watching tech videos, and exploring creative design ideas. I
              strongly believe in continuous learning and collaboration.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              My goal is to become a world-class developer who not only builds
              amazing apps but also contributes to open-source and helps others
              grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
