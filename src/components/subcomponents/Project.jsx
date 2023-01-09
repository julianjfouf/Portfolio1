import React from "react";

const Project = ({ title, description, image, link, code }) => {
  return (
    <div className="text-white rounded-xl shadow-lg my-16 relative max-w-3xl group overflow-hidden">
      <img src={image} className="z-[-100] overflow-hidden" alt="" />
      <div className="top-0 rounded-xl left-0 right-0 bottom-0 absolute bg-black opacity-10 overflow-hidden group-hover:opacity-90 duration-300" />
      <div className="scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-300 z-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full p-6 sm:w-fit">
        <h1 className="sm:text-3xl text-lg font-semibold">{title}</h1>
        <p className="sm:text-lg text-xs">{description}</p>
        <div className="w-full flex justify-between mt-5">
          <a
            href={link}
            className="font-semibold cursor-pointer text-black bg-white rounded outline outline-1 outline-white flex justify-center items-center sm:text-sm text-xs p-2 hover:bg-black hover:text-white duration-300"
            target="_blank"
          >
            {"<LiveWebsite />"}
          </a>
          <a
            href={code}
            className="font-semibold cursor-pointer text-black bg-white rounded outline outline-1 outline-white flex justify-center items-center text-sm p-2 hover:bg-black hover:text-white duration-300"
            target="_blank"
          >
            {"<GithubCode />"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
