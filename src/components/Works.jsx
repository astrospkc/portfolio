import React from "react";
import style from "./style";
import { Link } from "react-router-dom";
import weather from "./weather.png";
import web from "./web.jpg";
import movieFrontImage from "./movie.png";
import image from "./blogshot.png";

const Works = () => {
  return (
    <>
      <div className="m-7 ">
        <h1 className="text-4xl text-center font-bold text-gray-500">
          Projects
        </h1>

        <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black">
          <img src={movieFrontImage} alt="" className="w-1/2 rounded-xl " />
          <div className="mx-4 flex flex-col justify-center items-center">
            <p className="multiline text-white">
              This is a movie app where I used external tmdb APi and used tools
              such as reactjs , html and tailwind css.
            </p>
            <Link to="https://movie-app-gamma-orpin.vercel.app/">
              <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-yellow-600 ">
                click here
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black">
          <img src={weather} alt="" className="w-1/2 rounded-xl" />
          <div className="mx-4 flex flex-col justify-center items-center">
            <p className="multiline text-white">
              Tools used - Css , html and Javascript
            </p>
            <Link to="https://weather-info-eight.vercel.app/">
              <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-yellow-600  ">
                click here
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  flex-col justify-center items-center m-4   p-3 shadow-lg shadow-black">
          <img src={image} alt="" className="w-1/2 rounded-xl" />
          <div className="mx-4 flex flex-col justify-center items-center">
            <p className="multiline text-white">
              Simple blogging website where we can write up our blog and post
              it. Features added - delete , add, edit <div className=""></div>
            </p>
            <Link to="https://v-blog-7m8n.vercel.app/">
              <button className=" px-2 border-r-2 border-l-2 rounded-lg mt-4 text-yellow-600 ">
                click here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
