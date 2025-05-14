import React from "react";
import SectionHeader from "../UI/SectionHeader";
import aboutImage from "./../../img/about.png";

const About = () => {
  return (
    <div
      className="section-container mt-40 flex flex-col gap-5 lg:flex-row md:gap-2"
      id="about"
    >
      <div>
        <img src={aboutImage} alt="AboutImage" className="w-[290rem]" />
      </div>
      <div className="">
        <SectionHeader
          title="About"
          description="Designing and Developing Websites that Make a Difference"
          color="text-purple-500 "
        />
        <p className="mt-4">
          "Hi there! I'm Ali Osman, a web developer with +3 years of
          experience in building websites and web applications. I'm passionate
          about creating user-friendly and scalable web solutions that help
          businesses succeed online. My skills include proficiency in front-end
          technologies such as HTML, CSS, and JavaScript, as well as experience
          with back-end frameworks like PHP and NodeJS. I've also worked with
          various CMS platforms like WordPress, and have experience with
          database technologies such as MySQL and MongoDB."
        </p>
      </div>
    </div>
  );
};

export default About;
