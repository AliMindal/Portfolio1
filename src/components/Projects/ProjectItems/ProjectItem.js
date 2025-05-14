import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="w-[21rem]">
      <div className="max-w-sm  rounded-xl overflow-hidden shadow-lg border border-slate-500">
        <img className="w-full" src={props.img} alt="Projects-images" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <a
              className="hover:text-purple-500 duration-100"
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              {props.title}
            </a>
          </div>
          <p className="text-gray-200 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.tags.map((tag, index) => {
            return (
              <span className="tag" key={index}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
