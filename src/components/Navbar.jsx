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
      <div className="m-3">
        <div>
          <ul
            className={
              toggleMenu
                ? "absolute left hover:text-yellow-500  bottom-0 md:static md:flex md:flex-row   mx-3 px-2 "
                : "hidden " +
                  " right-0  bottom-0 md:static md:flex md:flex-row  md:items-center mx-3 px-2 "
            }
          >
            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/">Home</Link>
            </li>

            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/about">About</Link>
            </li>
            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/works">Works</Link>
            </li>
            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="mr-6 bg-gray-700 text-white px-3 rounded-lg shadow-md shadow-black hover:text-yellow-500">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden justify-self-start" onClick={handleToggle}>
          {!toggleMenu && (
            <div className="md:hidden text-white ">
              <BsList className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
            </div>
          )}

          {toggleMenu && (
            <div className="md:hidden text-white">
              <BsXLg className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
// className="flex flex-col md:flex-row  "
