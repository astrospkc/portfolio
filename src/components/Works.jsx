import React from "react";
import style from "./style";
import { Link } from "react-router-dom";
import weather from "./weather.png";
import web from "./web.jpg";
import movieFrontImage from "./movie.png";
import image from "./blog.png";
import youtubeClone from "../Images/youtubeClone.png";
import foodPage from "../Images/1.png";

const Works = () => {
  return (
    <>
      <div className=" md:m-7  flex flex-col justify-center items-center  ">
        <div>
          <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-500  p-3">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-5 skillsanimate justify-center items-center  ">
          <div className="flex  flex-col justify-center items-center m-4  p-3 shadow-lg shadow-black w-fit rounded-xl ">
            <img
              src={movieFrontImage}
              alt=""
              className="w-full rounded-xl mb-4"
            />
            <div className="mx-4 flex flex-col justify-center items-center w-fit">
              <div className="my-2">
                <ul className="grid grid-cols-3 md:grid-cols-4 ">
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Reactjs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full  rounded-xl text-xs md:text-sm">
                    HTML
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full  rounded-xl text-xs md:text-sm">
                    Tailwind
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full  rounded-xl text-xs md:text-sm ">
                    Javascript
                  </li>
                </ul>
              </div>
              <p className="multiline text-white text-sm md:text-md w-fit ">
                This is a movie app where I used external tmdb APi and used
                tools such as reactjs , html and tailwind css.
              </p>
              <div className="flex flex-row">
                <Link to="https://movie-app-gamma-orpin.vercel.app/">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-3 text-sm md:text-lg text-yellow-600 ">
                    View site
                  </button>
                </Link>
                <Link to="https://github.com/astrospkc/movie-app">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black w-fit rounded-xl">
            <img src={weather} alt="" className="w-full rounded-xl" />
            <div className="mx-4 flex flex-col justify-center items-center">
              <div className="my-2">
                <ul className="grid grid-cols-3 md:grid-cols-4 ">
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Reactjs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    HTML
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Tailwind
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Javascript
                  </li>
                </ul>
              </div>
              <p className="multiline text-white">
                Tools used - Css , html and Javascript
              </p>
              <div className="flex flex-row">
                <Link to="https://weather-info-eight.vercel.app/">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-4 text-sm md:text-lg text-yellow-600  ">
                    View site
                  </button>
                </Link>
                <Link to="https://github.com/astrospkc/weather-info">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black w-fit  rounded-xl">
            <img src={image} alt="" className="w-full rounded-xl" />
            <div className="mx-4 flex flex-col justify-center items-center">
              <div className="my-2">
                <ul className="grid grid-cols-3 md:grid-cols-4 ">
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 rounded-xl text-xs md:text-sm">
                    Reactjs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    HTML
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Tailwind
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Javascript
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Mongodb
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Nodejs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Expressjs
                  </li>
                </ul>
              </div>
              <p className="multiline text-white">
                Simple blogging website where we can write up our blog and post
                it. Features added - delete , add, edit <div className=""></div>
              </p>
              <div className="flex flex-row">
                <Link to="https://v-blog-7m8n.vercel.app/">
                  <button className=" px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-4 text-sm md:text-lg text-yellow-600 ">
                    View site
                  </button>
                </Link>
                <Link to="https://github.com/astrospkc/v-blog">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black w-fit  rounded-xl">
            <img src={youtubeClone} alt="" className="w-full rounded-xl" />
            <div className="mx-4 flex flex-col justify-center items-center">
              <div className="my-2">
                <ul className="grid grid-cols-3 md:grid-cols-4 ">
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Reactjs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    HTML
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Tailwind
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Javascript
                  </li>
                </ul>
              </div>
              <p className="multiline text-white min-w-fit">
                A simple youtube where I used external Api given to me for a
                project. I build this clone using Reactjs,Tailwind Javascript.
                The best thing I learned about is how to implement pagination,so
                to do that I took help from youtube and chatgpt and I did it at
                the end . I learned all the basic implementation.{" "}
                <div className=""></div>
              </p>
              <div className="flex flex-row">
                <Link to="https://grocare-youtube-clone.vercel.app/">
                  <button className=" px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-4 text-sm md:text-lg text-yellow-600 ">
                    View site
                  </button>
                </Link>
                <Link to="https://github.com/astrospkc/grocare-youtubeClone-">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* chefkart */}
          <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black w-fit  rounded-xl">
            <img src={foodPage} alt="" className="w-fullrounded-xl" />
            <div className="mx-4 flex flex-col justify-center items-center">
              <div className="my-2">
                <ul className="grid grid-cols-3 md:grid-cols-4 ">
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Reactjs
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    HTML
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm">
                    Tailwind
                  </li>
                  <li className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2 w-full rounded-xl text-xs md:text-sm ">
                    Javascript
                  </li>
                </ul>
              </div>
              <p className="multiline text-white">
                A simple 2 page food recipe website which let users know all the
                ingredients that were added in making respective food item.
                <div className=""></div>
              </p>
              <div className="flex flex-row">
                <Link to="https://chefkart-tau.vercel.app/">
                  <button className=" px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-4 text-sm md:text-lg text-yellow-600 ">
                    View site
                  </button>
                </Link>
                <Link to="https://github.com/astrospkc/chefkart">
                  <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
