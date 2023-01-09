import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:text-left items-baseline my-12 container mx-auto relative bg-white rounded-xl shadow-lg">
      <svg
        className="absolute left-0 bottom-0 z-[1] lg:visible invisible"
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
        className="absolute right-0 top-0 z-[1] lg:visible invisible"
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
      <div
        id="about"
        className="sm:p-12 my-12 w-1/2 bg-white flex flex-col items-center justify-baseline container mx-auto rounded-l-xl"
      >
        <h1 className="z-[100] text-4xl text-black font-bold z-10">
          <span className="text-[#669dec] z-10">About</span> Me
        </h1>
        <p className="max-w-lg mt-5 z-10">
          Hey! I am a 17 year old high school student with a{" "}
          <span className="text-[#669dec] font-semibold">passion</span> for making{" "}
          <span className="text-[#669dec] font-semibold">innovative </span>
          and <span className="text-[#669dec] font-semibold">appealing</span> user interfaces
          with a priority on the user experience.
        </p>
      </div>
      <div
        id="contact"
        className="sm:p-12 pb-12 w-1/2 bg-white flex flex-col items-center justify-baseline container mx-auto rounded-r-xl"
      >
        <h1 className="z-[100] text-4xl text-black font-bold">
          <span className="text-[#669dec]">Contact</span> Info
        </h1>
        <div className="text-center mt-5 space-y-5">
          <div>
            <span className="font-semibold text-[#669dec] tracking-widest">
              EMAIL
            </span>
            <p>juliancoding30@gmail.com</p>
          </div>
          <div>
            <span className="font-semibold text-[#669dec] tracking-widest">
              PHONE
            </span>
            <p>(209)637-9231</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
