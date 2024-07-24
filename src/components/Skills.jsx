import React from "react";
// import script from "script.js"
import { Circle } from "rc-progress";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";

import { DiCss3 } from "react-icons/di";

import { DiMongodb } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";

const Skills = () => {
  return (
    <>
      <div className=" flex">
        <div className="m-7 h-screen flex flex-col justify-center items-center">
          <h1 className="text-gray-600 text-xl md:text-4xl font-bold">
            TOOLS FAMILIAR WITH
          </h1>

          {/* fonts - {css, html , js, reactjs, python, nodejs, expressjs , mongodb,} */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-5 skillsanimate ">
            <div className="tooltip">
              <BsFiletypeHtml className="text-7xl bg-slate-300 p-2 rounded-lg text-red-900 shadow-sm shadow-black" />
              <span className="tooltiptext">Html</span>
            </div>
            <div className="tooltip">
              <DiJavascript className="text-7xl bg-slate-300 p-2 rounded-lg text-yellow-500 shadow-sm shadow-black" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tooltip">
              <DiCss3 className="text-7xl bg-slate-300 p-2 rounded-lg text-blue-800 shadow-sm shadow-black" />
              <span className="tooltiptext">Javascript</span>
            </div>

            <div className="tooltip">
              <DiMongodb className="text-7xl bg-slate-300 p-2 rounded-lg text-green-600 shadow-sm shadow-black" />
              <span className="tooltiptext">Monogodb</span>
            </div>

            <div className="tooltip">
              <DiPython className="text-7xl bg-slate-300 p-2 rounded-lg  shadow-sm shadow-black " />
              <span className="tooltiptext">Python</span>
            </div>

            <div className="tooltip">
              <DiNodejs className="text-7xl bg-slate-300 p-2 rounded-lg text-green-800 shadow-sm shadow-black" />
              <span className="tooltiptext">Nodejs</span>
            </div>

            <div className="tooltip">
              <DiReact className="text-7xl bg-slate-300 p-2 rounded-lg text-cyan-600 shadow-sm shadow-black" />
              <span className="tooltiptext">Reactjs</span>
            </div>

            <div className="tooltip">
              <DiMysql className="text-7xl bg-slate-300 p-2 rounded-lg shadow-sm shadow-black " />
              <span className="tooltiptext">MySQL</span>
            </div>

            <div className="tooltip">
              <DiIllustrator className="text-7xl bg-slate-300 p-2 rounded-lg text-red-700 shadow-sm shadow-black" />
              <span className="tooltiptext">Illustrator</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center ">
        <div style={{ margin: 10, height: 130, width: 130 }} className="">
          <Circle
            percent={20}
            strokeWidth={4}
            strokeColor="black"
            trailColor="#D3D3D3"
            trailWidth={4}
            strokeLinecap="circle"
          />
        </div>
        <div className="">
          <h1 className="">Html</h1>
        </div>
      </div> */}
    </>
  );
};

export default Skills;

{
  /* <div className="container">
        <div className="circular-progress">
          <span className="progress-value">0%</span>
        </div>
        <span className="text">HTML</span>
      </div>
      <script src="script.js"></script> */
}
