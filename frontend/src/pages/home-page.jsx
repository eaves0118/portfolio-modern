import React from "react";
import Hero from "@components/hero";
import About from "@components/about-me";
import Skills from "@components/skills";
import Contact from "../components/contact";
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
