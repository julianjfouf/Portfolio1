import React from "react";

const Skill = ({ image, title }) => {
  return (
    <div className="w-1/3 flex flex-col justify-center items-center">
      <img
        src={image}
        className="h-20 sm:h-32 my-8 w-full object-contain aspect-auto peer scale-100 hover:scale-125 duration-300"
        alt=""
      />
      <span className="text-black font-semibold opacity-0 scale-0 peer-hover:opacity-100 peer-hover:scale-100 duration-300">
        {title}
      </span>
    </div>
  );
};

export default Skill;
