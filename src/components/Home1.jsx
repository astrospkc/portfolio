import React, { useState } from "react";
import About from "./About";
import Works from "./Works";
import Skills from "./Skills";
import Contacts from "./Contacts";

const Home1 = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center h-screen p-5 ">
          {/* left section */}
          <div className="flex flex-col  backdrop-blur-lg rounded-lg  shadow-lg shadow-black ">
            <h1 className=" text-xs md:text-2xl text-white  w-fit px-2 my-2 m-auto">
              Hi, I'm Punam Kumari
            </h1>
            <p className="mx-6 text-sm md:text-2xl text-center font-bold text-white">
              Frontend Developer
            </p>
            <p className=" text-white font-bold  sm:text-md  md:text-2xl  ml-12 mr-12 md:mr-60 md:mt-20 text-center ">
              “Every great developer you know got there by solving problems they
              were unqualified to solve until they actually did it.” – Patrick
              McKenzie
            </p>
          </div>
        </div>
        <About />
        <hr />
        <Works />
        <hr />
        <Skills />
        <hr />
        <Contacts />
      </div>
    </>
  );
};

export default Home1;
