import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import { FiBookOpen, FiBox, FiCpu, FiPhoneCall } from "react-icons/fi";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Education from "./Education";

const About = () => {
  return (
    <>
      <TitleDashboard
        title="About"
        paragraf="A short story of me, not important but seem better than nothing."
        icons={<FiBox />}
      />
      <h3 className="text-sm md:text-md text-justify text-neutral-400 dark:text-neutral-400 py-1">
        With a background in D4 Information Technology from the State
        Polytechnic of Lhokseumawe, I bring skills in website development with a
        specific focus on FrontEnd Development. I have completed several website
        projects that demonstrate my dedication and expertise. I have a strong
        interest in continuously expanding my knowledge in various aspects of
        web development, and I am ready to take on new challenges in the world
        of technology. I believe that the combination of my educational
        background in information technology and practical experience in website
        development enables me to make valuable contributions to future
        projects. I am eager to continue learning and growing in the world of
        web development, and I am prepared to take my skills and dedication to
        the next level
      </h3>
      <LineBreak />
      <Contact />
      <LineBreak />
      <Education />
      <LineBreak />
      <Certificate />
      <LineBreak />
    </>
  );
};

export default About;
