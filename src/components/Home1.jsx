import React, { useState } from "react";
import About from "./About";
import Works from "./Works";
import Skills from "./Skills";
import Contacts from "./Contacts";
import { BsAwardFill } from "react-icons/bs";

const Home1 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center h-screen p-5">
          {/* left section */}
          <div className="flex flex-col  md:backdrop-blur-lg rounded-lg  shadow-lg shadow-black ">
            <h1 className=" text-xs md:text-2xl text-white  w-fit px-2 my-2 m-auto">
              Hi, I'm Punam Kumari
            </h1>
            <h1 className="mx-6 text-sm md:text-2xl text-center font-bold text-yellow-600">
              Frontend Developer
              {/* <BsAwardFill className="text-yellow-600" /> */}
            </h1>

            <p className=" text-white font-bold  sm:text-md  md:text-2xl    md:mt-20 text-center ">
              “Every great developer you know got there by solving problems they
              were unqualified to solve until they actually did it.” – Patrick
              McKenzie
            </p>
          </div>
        </div>
        <About />
        <hr className="w-1/2 mx-auto bg-gray-700" />
        <Works />
        <hr className="w-1/2 mx-auto" />
        <Skills />
        <hr className="w-1/2 mx-auto" />
        <Contacts />
      </div>
    </>
  );
};

export default Home1;
