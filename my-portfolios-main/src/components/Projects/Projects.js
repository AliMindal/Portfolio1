import React from "react";
import ProjectItem from "./ProjectItems/ProjectItem";
import SectionHeader from "../UI/SectionHeader";

const Projects = (props) => {
  return (
    <div className="bg-gradient-to-b from-purple-800 p-1 mt-16">
      <div className="section-container mt-32" id="projects">
        <SectionHeader
          title="Projects"
          description="Some of my featured projects"
          color="text-white"
        />

        <div className="flex flex-wrap gap-5 justify-start">
          {props.data.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.image}
                link={project.link}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
