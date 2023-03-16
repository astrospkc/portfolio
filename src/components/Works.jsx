import React from "react";
import style from "./style";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="flex  flex-row m-4">
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
      <div className="flex  flex-row-reverse m-4">
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
    </>
  );
};

export default Works;
