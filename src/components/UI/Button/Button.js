import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.link}
      onClick={props.onClick}
      className={`px-6 py-2 text-sm rounded-xl font-semibold text-white bg-primary-darker  hover:bg-primary-dark transition duration-200 cursor-pointer ${props.classes}`}
    >
      {props.name}
      {props.icon}
    </a>
  );
};

export default Button;
