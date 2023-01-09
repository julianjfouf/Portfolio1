import React from "react";
import Project from "./subcomponents/Project";
import background from "./assets/Project 1 Image.jpg";
import background2 from "./assets/Project 2 Image.jpg";
import background3 from "./assets/Portfolio 3 Image.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="p-4 flex flex-col items-center container mx-auto relative"
    >
      <h1 className="z-[100] text-4xl text-black font-bold">
        My <span className="text-[#669dec]">Projects</span>
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Project
          title="Dano's Detailing"
          description="A car detailing website for a freelancing project"
          image={background}
          link="https://www.danosdetailing.com/"
          code="https://github.com/julianjfouf/FernandoCar"
        />
        <Project
          title="Shnoze Portfolio"
          description="A video editing portfolio for a freelancing project"
          image={background3}
          link="https://hanh-portfolio.vercel.app/"
          code="https://github.com/julianjfouf/HanhPortfolio"
        />
        <Project
          title="Malik's Advertising Agency"
          description="An advertising agency website for a freelancing project"
          image={background2}
          link="https://ad-agency-rho.vercel.app/"
          code="https://github.com/julianjfouf/AdAgency"
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
        className="absolute left-0 bottom-1/4 z-[-1]"
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

export default Projects;
