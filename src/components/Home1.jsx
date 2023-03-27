import React from "react";
import About from "./About";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Sidebar from "./Sidebar";
import style from "./style";
import sunset from "./sunset.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Works";
import Skills from "./Skills";
import Home from "./Home";
import Works from "./Works";
import Contacts from "./Contacts";
import profileImage from "./punam.jpg";

const Home1 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* left section */}
        <div
          className=" lg:w-1/2 lg:h-full lg:rounded-br-full shadow-xl shadow-black "
          style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh ",
            backdropFilter: blur(),
          }}
        >
          <div className="flex flex-col mx-10 md:mx-40 my-20 justify-center items-center backdrop-blur-lg rounded-lg  shadow-lg shadow-black ">
            <img
              // src={profileImage}
              alt=""
              className="w-2/3 h-2/3  rounded-full  my-3   border-4 border-red-100 shadow-lg shadow-black"
            />
            <h1
              className=" text-xs md:text-2xl text-white bg-black w-fit px-2 my-2 m-auto"
              style={style}
            >
              Hi, I'm Punam Kumari
            </h1>
            <p className="mx-6 text-sm md:text-2xl text-center font-bold">
              Frontend Developer
            </p>
            <ul></ul>
          </div>
          <p className="text-left text-slate-800 font-bold  sm:text-md  md:text-lg  ml-12 mr-12 md:mr-60 md:mt-20 backdrop-blur-md ">
            “Every great developer you know got there by solving problems they
            were unqualified to solve until they actually did it.” – Patrick
            McKenzie
          </p>
        </div>

        {/* right section */}
        <div className=" md:w-1/2 min-h-fit flex flex-col mr-3 ">
          <Router>
            <Navbar />
            <div className="md:overflow-scroll md:overflow-x-clip">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/works" element={<Works />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
};

export default Home1;
