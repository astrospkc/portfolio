import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }
  return (
    <>
      <div className="md:hidden justify-self-start m-4" onClick={handleToggle}>
        {!toggleMenu && (
          <div className="md:hidden text-white ">
            <BsList className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
          </div>
        )}

        {toggleMenu && (
          <div className="md:hidden text-white ">
            <BsXLg className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
          </div>
        )}
      </div>
      <div
        className={
          toggleMenu
            ? " md:min-h-screen md:border-r-2  text-white md:border-gray-600  md:flex justify-evenly items-center   "
            : "hidden md:flex  md:min-h-screen md:border-r-2  text-white md:border-gray-600   justify-evenly items-center  "
          // "w-2/3 md:min-h-screen md:border-r-2 p-3 text-white border-gray-600  md:flex justify-evenly items-center bg-red-300 "
        }
      >
        <ul
          className={
            toggleMenu
              ? " hover:text-yellow-500 flex flex-col  mr-3 px-3"
              : "hidden " + "  md:flex flex-col mr-3  "
          }
          // className=" hover:text-yellow-500 flex flex-col m-3 "
        >
          <li className="md:m-6  text-white px-3 border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500">
            <Link to="/">Home</Link>
          </li>

          <li className="md:m-6  text-white px-3  border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500">
            <Link to="/about">About</Link>
          </li>

          <li className="md:m-6  text-white px-3 border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500">
            <Link to="/works">Works</Link>
          </li>
          <li className="md:m-6  text-white px-3 border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="md:m-6  text-white px-3 border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
// className="flex flex-col md:flex-row  "
