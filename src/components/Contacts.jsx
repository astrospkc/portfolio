import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-8">CONTACT</h1>
      <div
        className="mx-9 border-2 border-black "
        style={
          {
            // backgroundColor: "#1b263b",
          }
        }
      >
        <div className="flex flex-row m-9  hover:cursor-pointer  ">
          <BsLinkedin className="text-4xl text-black " />
          <Link to="https://www.linkedin.com/in/punam-kumari-2018951b6/">
            <h1 className="text-black mx-6 font-semibold hover:text-yellow-600">
              LinkedIn
            </h1>
          </Link>
        </div>

        <div className=" flex flex-row mb-9 mx-9 ">
          <BsGithub className="text-4xl text-black  " />
          <Link to="https://github.com/astrospkc?tab=repositories">
            <h1 className="text-black mx-6 font-semibold hover:text-yellow-600">
              Github
            </h1>
          </Link>
        </div>
        <div className=" flex flex-row mx-9 mb-9 ">
          <BsTwitter className="text-4xl text-black  " />
          <Link to="https://twitter.com/punamku22075700">
            <h1 className="text-black mx-6 font-semibold hover:text-yellow-600">
              Twitter
            </h1>
          </Link>
        </div>
        <div className=" flex flex-row mx-9 mb-9 ">
          <h1 className="text-black mx-6 font-semibold hover:text-yellow-600">
            Email me at - punamkumari399@gmail.com
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contacts;
