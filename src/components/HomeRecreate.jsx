import React, { useState } from "react";
import About from "./About";

import Skills from "./Skills";
import Contacts from "./Contacts";
import { BsAwardFill } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import DisplaySkills from "./DisplaySkills";

import punampic from "../Images/punam.jpg";
import sunset from "../Images/sunset.jpg";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsIncognito } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { BsLinkedin, BsSunset } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import { BsHCircleFill } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const projects = [
  {
    id: 1,
    title: "DXV",
    toolsUsed: [
      "Nextjs",
      "HTML",
      "Tailwind",
      "Shadcn ui",
      "TypeScript",
      "Supabase",
      "Drizzle",
      "Expressjs",
    ],
    // imageLink: image,
    content:
      "DXV - a new and interactive way to connect with the same kind of people. This app provide features to search for similar groups , tweet, and ask permission to connect with other groups",

    githubLink:
      "https://github.com/astrospkc/DXV---get-in-touch-with-your-kind-of-people",
  },
  {
    id: 2,
    title: " O-transac backend",
    toolsUsed: ["Expressjs", "Javascript", "Mongoose"],
    // imageLink: weatherImage,
    content:
      "O-transac - This gives the functionality of taking loan, and disbursal of loan. This app is backend for O-transac frontend. I have used expressjs for backend and mongoose for database. I have used mongodb for database. ",

    githubLink: "https://github.com/astrospkc/O-Transac-Backend",
  },
  {
    id: 3,
    title: " V-Blog",
    toolsUsed: [
      "Reactjs",
      "HTML",
      "Tailwind",
      "Javaascript",
      "Mongodb",
      "Nodejs",
      "Expressjs",
    ],

    content:
      "Simple blogging website where we can write up our blog and post it. Features added - delete , add, edit ",

    githubLink: "https://github.com/astrospkc/v-blog",
  },
];

const blogs = [
  {
    id: 1,
    title: "Wow, What the 20s",
    content:
      "Its all about our 20's where we don't have any idea where we guys are going to end up, just believing in the path that we have taken.",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 2,
    title: "The little fire hard to see but carries light",
    content:
      "Its about the little fire which we mostly miss , but this little fire is the one which is going to light up our path.",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 3,
    title: "Phase 1 of DSV",
    content:
      "Its a blog about my dsv project , it contains all the details and mind mapping of the project ",
    link: "https://hashnode.com/post/clz9kzsc9000u08l8425b0rn4",
  },
  {
    id: 4,
    title: "TODO Application — using file functions in Java",
    link: "https://medium.com/@punamkumari399/todo-application-using-file-functions-in-java-a7779ab2d591",
  },
  {
    id: 5,
    title: "Traditional and JWT authentication difference",
    link: "https://punam-1674812033403.hashnode.dev/traditional-and-jwt-authentication-difference",
  },
];

const HomeRecreate = () => {
  return (
    <>
      <div className=" flex flex-col  bg-gradient-to-r bg-black skillsanimate ">
        <div className=" flex flex-col justify-center items-center m-auto h-screen border-b-2 border-gray-500 static">
          <div className="flex flex-row border-dotted border-4  border-x-yellow-500 p-4 rounded-3xl  ">
            <div className="bg-red p-4 flex flex-col w-fit justify-center items-center m-auto ">
              <div className="border-l-2 px-3 ">
                <h1 className=" flex flex-row text-xl md:text-5xl font-bold  text-yellow-400 ">
                  <span>Hi</span>{" "}
                  <BsEmojiSunglasses className="bg-yellow-500 text-black w-fit rounded-full" />
                </h1>
                <h1 className=" text-xl md:text-5xl font-bold   text-gray-400  w-fit px-2 my-2 m-auto">
                  I'm Punam Kumari
                </h1>
              </div>
              {/* <div className="w-full flex-wrap">
                <DisplaySkills />
              </div> */}
              <div className="flex flex-col mt-5 items-center ">
                <h1 className="text-sm font-bold  text-gray-500">
                  Scroll down to know me
                </h1>

                <BsArrowDownCircleFill className="text-xl md:text-5xl text-yellow-500" />
              </div>
            </div>

            <div className="rounded-full static ">
              <img
                src={punampic}
                alt="punam's profile picture"
                className="rounded-full h-48 w-40 p-2 border-2 border-blue-900"
              />
            </div>
          </div>
          <div className="w-full flex-wrap my-4">
            <DisplaySkills />
          </div>
        </div>

        <div className=" flex  flex-col justify-center items-center m-auto w-screen h-screen text-white border-b-2 border-gray-600 flex-grow-2 my-4 ">
          <div className="relative flex justify-center h-full  ">
            <div className="h-1/4 w-1/2">
              <img src={sunset} alt="" className="rounded-full opacity-40" />
            </div>

            <div className=" absolute top-0 left-auto flex flex-col justify-center  items-center">
              <h1 className="text-2xl md:text-5xl font-extrabold">
                Welcome to the <span className="text-yellow-500">Punam's </span>
                Portfolio
              </h1>
              <div className=" flex flex-col mx-20 md:mx-40 my-14 justify-center items-center">
                <h1 className="flex justify-center items-center text-sm md:text-xl font-bold my-4">
                  So hello there, first of all thanks to you for visiting my
                  portfolio.
                </h1>
                <BsIncognito className=" flex justify-center items-center text-xl md:text-5xl text-cyan-500 w-full" />
                <span className="text-yellow-500 font-bold text-xl md:text-2xl my-4 text-right">
                  Who Am I?
                </span>{" "}
                <p className="font-semibold text-sm md:text-base">
                  I'm a{" "}
                  <span className="text-red-400">Fullstack Developer</span>,{" "}
                  <span className="text-red-400">Blog Writer</span> both{" "}
                  <span className="text-red-400">technical</span> and{" "}
                  <span className="text-red-400">Non-technical</span>. I love to
                  spend my free time exploring new technologies and learn about
                  new things. My hobbies are -{" "}
                  <span className="text-red-400">Portrait sketches</span>,{" "}
                  <span className="text-red-400">Reading novels</span>,{" "}
                  <span className="text-red-400">Painting</span>
                </p>
                <p className=" font-semibold my-4 flex justify-center items-center text-center text-sm md:text-base w-fit">
                  Well , I have done my Bachelor's in Physics. Currently,I am
                  working on some really awesome projects to test my skills.
                  There is this instant dopamine release working on challenges
                  and completing them. Feel free to get in touch with me if you
                  find something useful from my portfolio. I like to share and
                  gain knowledge from the people of same interest of mine.
                  Freelancing is something I explore more into that field , if
                  you are looking for a freelancer , feel free to contact me via
                  email. All the contact details are provided at the end of the
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full flex-1 text-white  flex flex-col items-center m-auto w-screen p-4 border-b-2 border-gray-500">
          <h1 className="text-xl md:text-3xl font-bold">
            LET'S SEE SOME <span className="text-yellow-500">PROJECTS</span>
          </h1>
          <h1 className=" my-2 md:my-4">come here !</h1>
          {/* all the important projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 m-4">
            {projects &&
              projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="border-2 border-gray-500 rounded-2xl p-4  bg-gradient-to-r from-indigo-950 to-cyan-800 hover:bg-black "
                  >
                    <h1 className="text-2xl font-extrabold text-cyan-500 my-3">
                      {project.title}
                    </h1>
                    <p className="overflow-x-scroll text-gray-400">
                      {project.content}
                    </p>
                    <Link to={project.githubLink}>
                      <span className="my-2 flex justify-end items-end hover:text-yellow-500">
                        CODE
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
          <h1 className="my-2 md:my-4 text-gray-400">
            A button click and go to the projects page
          </h1>

          <div className="flex flex-row ">
            <Link to="/works">
              <button className="bg-white p-3 text-black rounded-2xl font-bold mx-3 hover:bg-gray-500">
                Projects
              </button>
            </Link>

            <Link to="/experimentalProjects">
              <button className="bg-white p-3 text-black rounded-2xl font-bold mx-3 hover:bg-gray-500">
                Experimental Projects
              </button>
            </Link>
          </div>
        </div>
        {/* blogs */}

        <div className=" h-full  text-white  flex flex-1 flex-col items-center m-auto w-screen p-4 border-b-2 border-gray-500">
          <h1 className="text-xl md:text-3xl font-bold">
            GET A GLIMPSE OF MY <span className="text-yellow-500">BLOGS</span>
          </h1>
          <h1 className=" my-2 md:my-4">come here !</h1>
          {/* all the important projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 m-4">
            {blogs &&
              blogs.map((blog) => {
                return (
                  <div
                    key={blog.id}
                    className="border-x-2 border-gray-700 rounded-2xl p-4  bg-gradient-to-r from-indigo-950  hover:bg-black "
                  >
                    <h1 className="text-2xl font-extrabold text-cyan-500 my-3">
                      {blog.title}
                    </h1>
                    <p className="overflow-x-scroll text-gray-400">
                      {blog.content}
                    </p>
                    <Link to={blog.link}>
                      <span className="my-2 flex justify-end items-end hover:text-yellow-500 ">
                        CODE
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
          <h1 className="my-2 md:my-4 text-gray-400">
            A button click and visit by bligs
          </h1>

          <div className="flex flex-row ">
            <Link to="/technical">
              <button className="bg-white p-3 text-black rounded-2xl font-bold mx-3 hover:bg-gray-500">
                TECHNICAL BLOGS
              </button>
            </Link>

            <Link to="/nonTechnical">
              <button className="bg-white p-3 text-black rounded-2xl font-bold mx-3 hover:bg-gray-500">
                NON-TECHNICAL BLOGS
              </button>
            </Link>
          </div>
        </div>

        {/* contact info */}
        <div>
          <div className=" h-screen text-white  flex flex-1 flex-col items-center m-auto w-screen p-4 border-b-2 border-gray-500 ">
            <h1 className="my-4 text-sm md:text-xl font-bold w-fit border-b-2 border-gray-500 p-2">
              Contact me via-
            </h1>
            <div className="flex flex-row mb-9 mx-9  hover:cursor-pointer hover:bg-yellow-600 rounded-full p-2 ">
              <BsLinkedin className="text-4xl  " />
              <Link to="https://www.linkedin.com/in/punam-kumari-2018951b6/">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100 ">
                  LinkedIn
                </h1>
              </Link>
            </div>

            <div className=" flex flex-row mb-9 mx-9  hover:bg-yellow-600 rounded-full p-1">
              <BsGithub className="text-4xl  " />
              <Link to="https://github.com/astrospkc?tab=repositories">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100">
                  Github
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row mx-9 mb-9 hover:bg-yellow-600 rounded-full p-1  ">
              <BsTwitter className="text-4xl   " />
              <Link to="https://twitter.com/punamku22075700">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100">
                  Twitter
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row mx-9 mb-9 hover:bg-yellow-600 rounded-full p-1  ">
              <BsMedium className="text-4xl   " />

              <Link to="https://medium.com/@zk214obscure">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100">
                  medium (non-technical)
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row mx-9 mb-9 hover:bg-yellow-600 rounded-full p-1  ">
              <BsMedium className="text-4xl   " />

              <Link to="https://medium.com/@punamkumari399">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100">
                  medium (technical)
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row mx-9 mb-9 hover:bg-yellow-600 rounded-full p-1  ">
              <BsHCircleFill className="text-4xl   " />
              <Link to="https://hashnode.com/@Punam">
                <h1 className=" mx-6 font-semibold hover:text-yellow-100">
                  hashnode
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row mx-9 mb-9 w-fit hover:bg-yellow-600 rounded-full p-1 ">
              <h1 className="mx-6 font-semibold hover:text-yellow-100  overflow-hidden  ">
                <b className="text-yellow-500">Email</b> -
                punamkumari399@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRecreate;

//   “Every great developer you know got there by solving problems they
//               were unqualified to solve until they actually did it.” – Patrick
//               McKenzie
