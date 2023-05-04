import React from "react";
import style from "./style";
import { FaReact } from "react-icons/fa";
import movie from "./logo.png";
const About = () => {
  return (
    <>
      <div className="  flex flex-col h-screen justify-center items-center ">
        <div className=" text-center">
          <h2 className="text-3xl font-bold my-4 text-gray-800 text-center">
            About Me
          </h2>

          <div className="text-2xl ml-1 flex flex-col justify-center items-center ">
            <h3 className="text-3xl font-semibold my-4 text-yellow-500 ">
              Hello, I'm Punam Kumari
            </h3>
            <h3 className="text-yellow-600 ">Frontend Developer</h3>
            <p
              style={style}
              className="text-lg mr-3 text-white w-1/2 text-center"
            >
              A really passionate person for what I really love to do. I am a
              BSc. graduate in Physics and I switched my career into frontend
              development. I like to create and learn new things and implement
              things on my projects.
            </p>
          </div>

          <div flex flex-col justify-center items-center>
            <ul className="mt-4 mb-2 ml-1 flex flex-col lg:flex-row text-slate-700 text-lg md:text-xl justify-center items-center ">
              <li className=" font-semibold " style={style}>
                Age....23
              </li>
              <li className="lg:ml-9 font-semibold " style={style}>
                Residence .... India
              </li>
              <li className="lg:mx-9 font-semibold " style={style}>
                Address .... Assam, India
              </li>
            </ul>
          </div>

          {/* my service */}
          <div className="mt-20 flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold my-4 text-gray-800">
              My Service
            </h2>

            <div className="flex flex-row ">
              <div className=" my-3  ">
                <FaReact className="text-7xl text-cyan-500 m-auto h-[90px] " />
                <h1 className="text-2xl font-bold text-white">Front-End </h1>
              </div>
              <div className="mx-11 my-3 shadow-md shadow-black">
                <img src={movie} alt="" className="h-[90px] m-auto" />
                <h1 className="text-2xl font-bold text-white">Logo Design</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
