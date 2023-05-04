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
      <div className="m-7 h-screen flex flex-col justify-center items-center">
        <h1 className="text-slate-800  text-md md:text-2xl font-bold">
          TOOLS FAMILIAR WITH
        </h1>

        {/* fonts - {css, html , js, reactjs, python, nodejs, expressjs , mongodb,} */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-5 ">
          <div>
            <BsFiletypeHtml className="text-7xl bg-slate-300 p-2 rounded-lg text-red-900 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">Html</h1>
          </div>
          <div>
            <DiJavascript className="text-7xl bg-slate-300 p-2 rounded-lg text-yellow-500 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">Javascript</h1>
          </div>
          <div>
            <DiCss3 className="text-7xl bg-slate-300 p-2 rounded-lg text-blue-800 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">CSS</h1>
          </div>

          <div>
            <DiMongodb className="text-7xl bg-slate-300 p-2 rounded-lg text-green-600 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">Mongodb</h1>
          </div>

          <div>
            <DiPython className="text-7xl bg-slate-300 p-2 rounded-lg  shadow-sm shadow-black " />
            <h1 className="text-xl font-semibold">Python</h1>
          </div>

          <div>
            <DiNodejs className="text-7xl bg-slate-300 p-2 rounded-lg text-green-800 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">Nodejs</h1>
          </div>

          <div>
            <DiReact className="text-7xl bg-slate-300 p-2 rounded-lg text-cyan-600 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">React</h1>
          </div>

          <div>
            <DiMysql className="text-7xl bg-slate-300 p-2 rounded-lg shadow-sm shadow-black " />
            <h1 className="text-xl font-semibold">Mysql</h1>
          </div>

          <div>
            <DiIllustrator className="text-7xl bg-slate-300 p-2 rounded-lg text-red-700 shadow-sm shadow-black" />
            <h1 className="text-xl font-semibold">Illustrator</h1>
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
