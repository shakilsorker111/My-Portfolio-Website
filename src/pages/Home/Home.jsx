import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <LearningJourney></LearningJourney>
      <About></About>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
