import React from "react";

const LearningJourney = () => {
  return (
    <div>
      <section id="learning" className="py-16 bg-base-200 rounded-2xl my-7">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            My Learning Journey
          </h2>
          <p className="text-gray-500 mt-2">How I Became a Web Developer</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              I started my web development journey around{" "}
              <strong>6 months ago</strong> by enrolling in the
              <span className="text-primary font-medium">
                {" "}
                Programming Hero Web Development Course
              </span>
              . Since then, I’ve been committed to learning and practicing
              daily.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              During the course, I gained hands-on experience with modern
              technologies like{" "}
              <strong>
                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
              </strong>
              , and tools like Git, Firebase, and Tailwind CSS.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              I've built multiple full-stack projects, learned how to debug and
              deploy apps, and practiced solving real-world problems. This
              journey helped me grow not only as a developer, but also as a
              problem solver.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow">
            <p>
              I'm continuously learning new skills and contributing to personal
              projects while preparing myself for professional opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningJourney;
