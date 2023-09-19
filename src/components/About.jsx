import React from "react";
import { Link } from "react-router-dom";
import style from "./style";
import { FaReact } from "react-icons/fa";
import { BsHandIndexFill } from "react-icons/bs";
import movie from "./logo.png";
const About = () => {
  return (
    <>
      <div  style={{backgroundImage:'url('}} className="  flex flex-col  justify-center items-center  ">
        <div className=" text-center ">
          <h2 className=" text-3xl md:text-6xl font-bold my-4 text-gray-500 text-center ">
            About Me
          </h2>
          <span className="flex justify-center items-center m-auto text-yellow-600 hover:cursor-pointer tooltip ">
            <BsHandIndexFill />
            <a href="../images/resume.pdf" download className="tooltiptext">
              Download resume
            </a>
          </span>

          <h3 className=" text-xl md:text-3xl font-semibold my-4 text-yellow-500 ">
            Hello, I'm Punam Kumari
          </h3>
          <h3 className="text-yellow-600 text-2xl skillsanimate ">
            Frontend Developer
          </h3>

          <div className="text-2xl ml-1 flex flex-col justify-center items-center ">
            <p
              style={style}
              className="flex flex-col text-lg mr-3 text-white w-1/2 text-center"
            >
              <p className="my-2">Hello , myself Punam and I am a passionate frontend developer.I have a very diverse education but with a great interest and after exploring many fields , I chose this field and I am grateful for knowing about my interest in this field.</p>
              <p className="my-2"><b className="text-yellow-500 text-xl">Expertise:</b> I am experienced with Reactjs , Javascript, Python , Mongodb , Nodejs, and Nextjs. I have worked on some projects for the better understanding of this field and still exploring and learning more about this technology.I thrive on creating more creative website and with more functionality. Its only a start , I happen to build more user friendly and profitable website.</p>
              <p className="my-2"><b className="text-yellow-500 text-xl">Passion and Motivation:</b> I'm driven by a relentless passion for simplicity. Every project is an opportunity to push the boundaries of creativity and innovation. I thrive on challenges and the opportunity to bring fresh, innovative perspectives to the table.</p>
              <p className="my-2">When I am not working on any project, you can find me exploring more about new technologies and how the other developers are working and their way of working and solving skills and how they execute any task. I love to learn more from any developers who are working on new technology and how they are doing.</p>
             
            </p>
          </div>

          {/* my service */}
          <div className="mt-20 flex flex-col justify-center items-center ">
            <h2 className="text-2xl md:text-3xl font-bold my-4 text-gray-500">
              My Service
            </h2>

            <div className="grid grid-cols-2 ">
              <div className=" my-3  ">
                <FaReact className="text-7xl text-cyan-500 m-auto h-[90px] " />
                <h1 className="text-lg md:text-2xl font-bold text-white">
                  Front-End{" "}
                </h1>
              </div>
              <div className="mx-11 my-3 ">
                <img src={movie} alt="" className="h-[90px] m-auto" />
                <h1 className="text-lg md:text-2xl font-bold text-white">
                  Logo Design
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
