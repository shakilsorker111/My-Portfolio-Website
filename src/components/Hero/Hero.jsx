import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaFilePdf,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-12">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 my-10 md:gap-8 mt-10">
        {/* Text Content */}
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I’m <span className="text-primary">MD. SAKIL HOSSAIN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-500 max-w-md">
            I build modern, responsive web applications using React, Node.js,
            and MongoDB. Passionate about clean code and user experience.
          </p>

          {/* Resume + Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Resume Button */}
            <a download className="btn btn-primary">
              <FaFilePdf /> Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/shakilsorker111"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://i.ibb.co/678m1f8K/1732374497434.jpg" // You can replace this with your own image in /public
            alt="MD. SAKIL HOSSAIN"
            className="w-64 h-64 object-cover object-top rounded-full shadow-lg border-4 border-primary"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
