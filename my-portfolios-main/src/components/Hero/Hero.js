import React from "react";
import BgAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Social from "../UI/Social/Social";
import fileUrl from "./../../pdf/Ali Osman Resume.pdf";
import { saveAs } from "file-saver";
import { IoArrowDownCircleSharp } from "react-icons/io5";

import Button from "../UI/Button/Button";

const Hero = () => {
  const downloadPDF = () => {
    saveAs(fileUrl, "Ali-Osman-Resume.pdf");
  };
  return (
    <div
      className="section-container flex flex-col justify-center items-center gap-5 mt-14 md:flex-row"
      id="home"
    >
      <div>
        <h2 className="text-4xl font-bold text-slate-100 mt-16">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 ">
            Full Stack Developer
          </span>{" "}
          Brings Your Vision to Life with State-of-the-Art Web Development
        </h2>
        <p className="mt-[1rem] text-slate-100">
          Welcome to my portfolio website! As a web developer, I'm passionate
          about crafting digital experiences that are both visually stunning and
          highly functional.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 mt-6 ">
          <Button
            name="Explore"
            link="#projects"
            classes="bg-purple-600 hover:bg-purple-800 flex items-center  justify-center"
          ></Button>
          <Button
            name="Download Cv"
            link="#download"
            onClick={downloadPDF}
            classes="border flex justify-center hover:bg-purple-600 items-center hover:text-white hover:border-purple-400"
            icon={<IoArrowDownCircleSharp size={20} className="w-7" />}
          />
        </div>
        <Social />
      </div>
      <div className="hidden lg:block">
        <BgAnimation />
      </div>
    </div>
  );
};

export default Hero;
