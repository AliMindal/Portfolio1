import React from "react";
import Menu from "./Menu/Menu";
import Button from "../../UI/Button/Button";
const Navbar = () => {
  return (
    <div className="sm:section-container flex justify-between p-5 sm:p-10 items-center">
      <div className="text-2xl font-bold">Ali.dev</div>
      <div className="flex justify-between w-[28rem] items-center">
        <Menu />
        <Button
          link="#contact"
          name="Contact"
          classes="bg-purple-600 hover:bg-purple-800"
        ></Button>
      </div>
    </div>
  );
};

export default Navbar;
