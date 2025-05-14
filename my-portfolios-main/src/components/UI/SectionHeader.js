import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="">
      <h2 className={`text-sm uppercase tracking-[1px] mb-1 ${props.color}`}>
        {props.title}
      </h2>
      <hr width="30px" className=" mb-4" />
      <p className="text-2xl font-semibold mb-5">{props.description}</p>
    </div>
  );
};

export default SectionHeader;
