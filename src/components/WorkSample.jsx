import React from "react";
import style from "./style";
import { Link } from "react-router-dom";
import weatherImage from "../Images/weatherImage.png";
import web from "./web.jpg";
import movieFrontImage from "./movie.png";
import image from "./blog.png";
import youtubeClone from "../Images/youtubeClone.png";
import foodPage from "../Images/1.png";

const works = [
  {
    id: 1,
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
    imageLink: image,
    content:
      "Simple blogging website where we can write up our blog and post it. Features added - delete , add, edit ",
    siteLink: "https://v-blog-7m8n.vercel.app/",
    githubLink: "https://github.com/astrospkc/v-blog",
  },
  {
    id: 2,
    title: " degree-0",
    toolsUsed: ["HTML", "CSS", "Javaascript"],
    imageLink: weatherImage,
    content:
      "Weather app where we can check weather of any place. Tools used - Css , html and Javascript",
    siteLink: "https://weather-info-eight.vercel.app/",
    githubLink: "https://github.com/astrospkc/weather-info",
  },
  {
    id: 3,
    title: " YT-shorts",
    toolsUsed: ["Reactjs", "HTML", "Tailwind", "Javaascript"],
    imageLink: youtubeClone,
    content:
      " A simple youtube where I used external Api given to me for a project. I build this clone using Reactjs,Tailwind Javascript.The best thing I learned about is how to implement pagination,so to do that I took help from youtube and chatgpt and I did it at the end . I learned all the basic implementation. ",
    siteLink: "https://grocare-youtube-clone.vercel.app/",
    githubLink: "https://github.com/astrospkc/grocare-youtubeClone-",
  },
  {
    id: 4,
    title: " chefkart",
    toolsUsed: ["Reactjs", "HTML", "Tailwind", "Javaascript"],
    imageLink: foodPage,
    content:
      "  A simple 2 page food recipe website which let users know all the ingredients that were added in making respective food item.",
    siteLink: "https://chefkart-tau.vercel.app/",
    githubLink: "https://github.com/astrospkc/chefkart",
  },
  {
    id: 5,
    title: " V-App",
    toolsUsed: ["Reactjs", "HTML", "Tailwind", "Javaascript"],
    imageLink: movieFrontImage,
    content:
      "   This is a movie app where I used external tmdb APi and used tools such as reactjs , html and tailwind css.",
    siteLink: "https://movie-app-gamma-orpin.vercel.app/",
    githubLink: "https://github.com/astrospkc/movie-app",
  },
];

const WorkSample = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-r   md:m-7  flex flex-col justify-center items-center  w-screen  md:p-5">
        <div className="my-4 ">
          <h1 className=" text-3xl md:text-6xl font-semibold my-4 text-gray-600 text-center  ">
            PROJECTS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-5 skillsanimate justify-center items-center  ">
          {works.map((work) => {
            return (
              <div
                key={work.id}
                className="flex  flex-col justify-center relative items-center m-4  p-3 shadow-lg shadow-black w-fit rounded-xl "
              >
                <img
                  src={work.imageLink}
                  alt=""
                  className="w-full rounded-xl mb-4"
                />
                <div className="absolute top-[50%] left-[30%] hover:hidden">
                  <h1 className="text-bold text-xl md:text-3xl">
                    {work.title}
                  </h1>
                </div>
                <div className="mx-4 flex flex-col justify-center items-center w-fit">
                  <div className="my-2">
                    <ul className="grid grid-cols-3 md:grid-cols-4 my-3 ">
                      {work.toolsUsed.map((tool, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2  w-full rounded-xl text-xs md:text-sm"
                          >
                            {tool}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="multiline text-white text-sm md:text-md w-fit ">
                    {work.content}
                  </p>
                  <div className="flex flex-row">
                    <Link to={work.siteLink}>
                      <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-3 text-sm md:text-lg text-yellow-600 ">
                        View site
                      </button>
                    </Link>
                    <Link to={work.githubLink}>
                      <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkSample;
