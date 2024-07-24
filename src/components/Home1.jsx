import React, { useState } from "react";
import About from "./About";
import Works from "./Works";
import Skills from "./Skills";
import Contacts from "./Contacts";
import { BsAwardFill } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import DisplaySkills from "./DisplaySkills";
import WorkSample from "./WorkSample";

const Home1 = () => {
  return (
    <>
      <div className=" h-full bg-gradient-to-r from-cyan-800 to-violet-400  flex flex-col justify-center items-center skillsanimate w-screen">
        <div className="flex flex-col md:flex-row justify-around items-center h-screen p-5">
          {/* left section */}
          <div
            className="flex flex-col  shadow-lg shadow-black border-t-2 border-double border-yellow-600 w-1/2 rounded-full p-4 justify-center items-center m-auto"
            style={{
              backgroundImage: "url(/expImage.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className=" text-white  md:font-bold  text-lg  md:text-2xl    md:mt-20 text-center ">
              “Every great developer you know got there by solving problems they
              were unqualified to solve until they actually did it.” – Patrick
              McKenzie
            </p>
          </div>
          <div className="bg-red p-4  w-fit justify-center items-center m-auto border-l-2 ">
            <h1 className=" flex flex-row text-xl md:text-5xl font-bold  text-yellow-400 ">
              <span>Hi</span>{" "}
              <BsEmojiSunglasses className="bg-yellow-500 text-black w-fit rounded-full" />
            </h1>
            <h1 className=" text-xl md:text-5xl font-bold   text-black  w-fit px-2 my-2 m-auto">
              I'm Punam Kumari
            </h1>
            <DisplaySkills />
          </div>
        </div>
        <br />
        <hr className="w-1/2 mx-auto bg-gray-700" />

        <About />
        <br />

        <hr className="w-1/2 mx-auto bg-gray-700" />
        <WorkSample />
        <br />
        <hr className="w-1/2 mx-auto" />
        <Skills />
        <hr />
        <hr className="w-1/2 mx-auto" />

        <Contacts />
      </div>
    </>
  );
};

export default Home1;
