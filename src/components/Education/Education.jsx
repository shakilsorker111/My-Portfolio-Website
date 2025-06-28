import React from "react";

const Education = () => {
  return (
    <div>
      <section id="education" className="py-16 bg-base-200 rounded-2xl my-7">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-gray-500 mt-2">My Academic Background</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Latest Degree */}
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-primary">
              Diploma in Electrical Engineering
            </h3>
            <p className="text-gray-600">
              Sirajganj Ideal Textile Engineering Institute, Sirajganj,
              Bangladesh
            </p>
            <p className="text-gray-500 text-sm">Passed: 2025</p>
          </div>

          {/* SSC */}
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-primary">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-600">
              Baniyagati School and College, Sirajganj, Bangladesh
            </p>
            <p className="text-gray-500 text-sm">Passed: 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
