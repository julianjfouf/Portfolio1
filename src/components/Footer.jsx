import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000] text-center p-12 text-white flex flex-col justify-center items-center">
      <a href="#top" className="text-[60px] font-semibold relative group">
        Julian Jfouf
        <span className="absolute text-sm top-[50%] translate-y-[-50%] sm:left-[80%] left-[100%] sm:group-hover:translate-x-20 group-hover:opacity-100 opacity-0 duration-300 scale-0 group-hover:scale-100">
          Top
        </span>
      </a>
      <div className="flex sm:gap-12 gap-6 my-10">
        <a href="#skills" className="flex flex-col group items-start">
          <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
            01
          </span>
          <a
            href="#skills"
            className="leading-5 text-md relative before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
          >
            skills.
          </a>
        </a>
        <a href="#projects" className="flex flex-col group items-start">
          <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
            02
          </span>
          <a
            href="#projects"
            className="leading-5 relative text-md before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
          >
            projects.
          </a>
        </a>
        <a href="#contact" className="flex flex-col group items-start">
          <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
            03
          </span>
          <a
            href="#contact"
            className="leading-5 relative text-md before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
          >
            contact.
          </a>
        </a>
        <a href="#about" className="flex flex-col group items-start">
          <span className="text-sm font-semibold relative leading-5 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0">
            04
          </span>
          <a
            href="#about"
            className="leading-5 relative text-md before:delay-150 group-hover:before:scale-x-100 group-hover:before:origin-bottom-left before:duration-150 before:transition-transform before:bg-white before:absolute before:h-[2px] before:w-full before:bottom-0 before:origin-bottom-right before:scale-x-0"
          >
            about.
          </a>
        </a>
      </div>
      <p className="text-sm">
        &copy; 2023 All Rights Reserved | Website Created by Julian Jfouf
      </p>
    </div>
  );
};

export default Footer;
