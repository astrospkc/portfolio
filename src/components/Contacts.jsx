import React from "react";
import { BsLinkedin, BsSunset } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from "../Images/contactImage.png";
import { BsHCircleFill } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const Contacts = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center my-10 w-fit  ">
        <h1 className=" shadow-lg shadow-black  p-4 text-center font-bold text-2xl md:text-4xl text-gray-900 mt-8 ">
          CONTACT
        </h1>
        <div className=" ">
          <div className="flex flex-col  mx-9 justify-center items-center">
            <div className="flex flex-col  justify-center items-center my-5  ">
              {/* <img src={image} alt="" className="w-1/2" /> */}
              <h1 className="text-white text-sm md:text-xl font-bold  my-3  rounded-full p-2 bg-yellow-600">
                Feel free to contact me.
              </h1>
            </div>

            <div className=" flex flex-col md:flex-col text-white w-fit bg-gray-400 rounded-3xl p-4 ">
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
      </div>
    </>
  );
};

export default Contacts;
