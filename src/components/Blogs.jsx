import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="w-screen h-screen  m-auto justify-center items-center flex flex-row gap-10 bg-gradient-to-br from-teal-400 to-teal-900 overflow-y-hidden">
      <Link to="/technical">
        <div className="justify-center items-center p-10 shadow-lg shadow-black w-fit hover:bg-teal-200 ">
          <h1 className="hover:text-xl font-semibold hover:font-bold">
            Technical Blog
          </h1>
        </div>
      </Link>
      <Link to="/nonTechnical">
        <div className="justify-center items-center p-10 shadow-lg shadow-black w-fit hover:bg-teal-200">
          <h1 className="hover:text-xl font-semibold hover:font-bold">
            Non-Technical Blog
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Blogs;
