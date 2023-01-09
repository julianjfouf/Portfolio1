import React from "react";
import Skill from "./subcomponents/Skill";

const Skills = () => {
  return (
    <div
      id="skills"
      className="p-8 flex flex-col items-center container mx-auto relative"
    >
      <h1 className="z-[100] text-4xl text-black font-bold">
        My Tech <span className="text-[#669dec]">Skills</span>
      </h1>
      <div className="flex w-full max-w-2xl my-12 flex-wrap">
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/html-1.svg"
          title="HTML"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/css-3.svg"
          title="CSS"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
          title="JavaScript"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          title="React.js"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
          title="Tailwind CSS"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/threejs-1.svg"
          title="Three.js"
        />
      </div>
      <h1 className="z-[100] text-4xl text-black font-bold text-center">
        <span className="text-[#669dec]">Skills</span> I am Learning
      </h1>
      <div className="flex w-full max-w-2xl my-12 flex-wrap">
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          title="Next.js"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/redux.svg"
          title="Redux"
        />
        <Skill
          image="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          title="TypeScript"
        />
      </div>
      <svg
        className="absolute right-0 bottom-3/4 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="-25 -25 250 250"
      >
        <path
          d="M0.030857161016797363 102.48404509600232 C-11.423748923237946 120.83782124438633 22.308381634583668 166.2878639071061 39.40285344145208 179.54863813392322 C55.86912068645486 192.32209231030097 100.9480600967098 204.37161257222343 120.7335827947821 197.82698270156305 C149.50420385228233 188.31027349737752 212.21345972804932 133.62207795577916 199.82177162171027 105.96773912827287 C179.39423204951635 60.37991478231 26.479715318463015 60.1048992369928 0.030857161016797363 102.48404509600232Z"
          stroke="none"
          fill="#669dec"
        />
      </svg>
      <svg
        className="absolute md:visible invisible left-0 bottom-1/4 z-[-1]" 
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="-25 -25 250 250"
      >
        <path
          d="M0.030857161016797363 102.48404509600232 C-11.423748923237946 120.83782124438633 22.308381634583668 166.2878639071061 39.40285344145208 179.54863813392322 C55.86912068645486 192.32209231030097 100.9480600967098 204.37161257222343 120.7335827947821 197.82698270156305 C149.50420385228233 188.31027349737752 212.21345972804932 133.62207795577916 199.82177162171027 105.96773912827287 C179.39423204951635 60.37991478231 26.479715318463015 60.1048992369928 0.030857161016797363 102.48404509600232Z"
          stroke="none"
          fill="#669dec"
        />
      </svg>
    </div>
  );
};

export default Skills;
