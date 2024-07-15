import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillPaletteFill } from "react-icons/bs";

const navbarButtons = [
  {
    id: 1,
    name: "Home",
    icon: <BsHouseDoorFill className="my-auto mx-3" />,
  },
  {
    id: 2,
    name: "About",
    icon: <BsPersonCircle className="my-auto mx-3" />,
  },
  {
    id: 3,
    name: "Works",
    icon: <BsEyeFill className="my-auto mx-3" />,
  },
  {
    id: 4,
    name: "Skills",
    icon: <BsKeyFill className="my-auto mx-3" />,
  },
  {
    id: 5,
    name: "Contacts",
    icon: <BsSendFill className="my-auto mx-3" />,
  },
  {
    id: 6,
    name: "Blogs",
    icon: <BsFillPenFill className="my-auto mx-3" />,
  },
  {
    id: 7,
    name: "sketches",
    icon: <BsFillPaletteFill className="my-auto mx-3" />,
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }
  return (
    <>
      <div className="md:hidden justify-self-start m-4 " onClick={handleToggle}>
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
            ? " md:min-h-screen  text-white  md:flex justify-evenly items-center md:shadow-lg md:shadow-black backdrop-blur-lg  "
            : "hidden md:flex  md:min-h-screen  text-white  justify-evenly items-center md:shadow-lg md:shadow-black  backdrop-blur-lg"
          // "w-2/3 md:min-h-screen md:border-r-2 p-3 text-white border-gray-600  md:flex justify-evenly items-center bg-red-300 "
        }
      >
        <ul
          className={
            toggleMenu
              ? " hover:text-yellow-500 flex flex-col  mr-3 px-3 justify-center items-start"
              : "hidden " + "  md:flex flex-col mr-3 justify-center items-start"
          }
          // className=" hover:text-yellow-500 flex flex-col m-3 "
        >
          {navbarButtons.map((i) => {
            return (
              <li
                key={i.id}
                className="flex flex-row m-4 text-white px-3 border-b-2 md:border-b-0 border-gray-800 hover:text-yellow-500"
              >
                {i.icon}
                <Link to="/">{i.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
// className="flex flex-col md:flex-row  "
