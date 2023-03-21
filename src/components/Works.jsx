import React from "react";
import style from "./style";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="m-7">
        <h1 className="text-4xl font-bold text-gray-700">Projects</h1>
        <hr />
        <div className="flex  flex-row m-4 border-2 border-black p-3 shadow-lg shadow-black">
          <img src="/Images/movieFrontImage.png" alt="" className="w-1/2" />
          <div className="mx-4">
            <p className="">
              This is a movie app where I used external tmdb APi and used tools
              such as reactjs , html and tailwind css.
            </p>
            <Link to="https://movie-app-gamma-orpin.vercel.app/">
              <button className="bg-blue-500 px-2 rounded-lg mt-4 ">
                click here
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  flex-row-reverse m-4 border-2 border-black p-3 shadow-lg shadow-black">
          <img src="/Images/weather.png" alt="" className="w-1/2" />
          <div className="mx-4">
            <p className="">Tools used - Css , html and Javascript</p>
            <Link to="https://weather-info-eight.vercel.app/">
              <button className="bg-blue-500 px-2 rounded-lg mt-4 ">
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
