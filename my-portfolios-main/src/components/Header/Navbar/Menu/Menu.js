import React from "react";

const Menu = () => {
  return (
    <div>
      <ul className="hidden md:flex md:gap-7 md:justify-center md:font-bold md:text-sm">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
