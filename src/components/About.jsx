import React from "react";
import style from "./style";
import { FaReact } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className=" items-start md:text-left flex flex-col ml-3 ">
        <div className=" ml-3 ">
          <h2 className="text-3xl font-bold my-4 text-gray-800">About Me</h2>
          <hr className="" />
          <div className="text-2xl ml-1">
            <h3 className="text-xl font-semibold my-4 text-white">
              Hello, I'm Punam Kumari
            </h3>
            <p style={style} className="text-lg mr-3 text-black">
              2021 Bsc. Graduate in physics.I am a self-taught frontend
              developer.I am passionate about learning new things.
            </p>
          </div>

          <div>
            <ul className="mt-4 mb-2 ml-1 flex flex-col lg:flex-row text-slate-700 text-lg md:text-xl ">
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
          <div className="mt-20">
            <h2 className="text-3xl font-bold my-4 text-gray-800">
              My Service
            </h2>
            <hr />
            <div className="flex flex-row ">
              <div className=" my-3  shadow-md shadow-black">
                <FaReact className="text-7xl text-cyan-500 m-auto" />
                <h1 className="text-2xl font-bold">Front-End </h1>
              </div>
              <div className="mx-11 my-3 shadow-md shadow-black">
                <img
                  src="/Images/lockup vertical 2.png"
                  alt=""
                  className="h-[90px] m-auto"
                />
                <h1 className="text-2xl font-bold">Logo Design</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
