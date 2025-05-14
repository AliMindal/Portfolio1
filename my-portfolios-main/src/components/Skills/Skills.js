import React from "react";
import SkillImg from "./../../img/skills.png";
import SectionHeader from "../UI/SectionHeader";
import { BsFillLightningFill } from "react-icons/bs";
const frontEnd = [
  "Html",
  "Css",
  "Javascript",
  "Angular",
  "Bootstrap",
  "Tailwind Css",
];
const backEnd = [
  "PHP",
  "Laravel",
  "Node JS",
  "Express Js",
  "Mongo DB",
  "MySQL",
];
const tools = ["git", "Socket io", "Babel", "Docker", "Webpack"];

const Skills = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${SkillImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="section-container pt-32 my-auto" id="skills">
        <div className="bg-[#141414] py-10 rounded-lg border border-slate-700">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title=" Teach Stack"
              description="What I use to build awesome web apps"
              color="text-purple-500 "
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl shadow-lg bg-gray-800 text-white overflow-hidden border-t-[5px] border-purple-600">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Front-end</h3>
                  <ul className="list-disc ml-4">
                    {frontEnd.map((tech, i) => {
                      return (
                        <li className="mb-1 flex items-center gap-2" key={i}>
                          <BsFillLightningFill />
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl shadow-lg bg-gray-800 text-white overflow-hidden border-t-[5px] border-purple-600">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Back-end</h3>
                  <ul className="list-disc ml-4">
                    {backEnd.map((tech, i) => {
                      return (
                        <li className="mb-1 flex items-center gap-2" key={i}>
                          <BsFillLightningFill />
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl shadow-lg bg-gray-800 text-white overflow-hidden border-t-[5px] border-purple-600">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Tools</h3>
                  <ul className="list-disc ml-4">
                    {tools.map((tech, i) => {
                      return (
                        <li className="mb-1 flex items-center gap-2" key={i}>
                          <BsFillLightningFill />
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
