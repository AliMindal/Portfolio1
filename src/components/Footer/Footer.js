import React from "react";
import Social from "../UI/Social/Social";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-32">
      <hr className="border border-slate-500 w-[80%] mx-auto" />
      <div className="section-container flex justify-center p-8 text-slate-400">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center text-center gap-5">
            <div className="text-2xl font-bold">Ali.dev</div>
            <p>&#169; {`${year} . Ali Osman All rights reserved.`}</p>
          </div>
          <div className="mx-auto">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
