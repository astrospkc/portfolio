import React from "react";
import style from "./style";
import { BsList } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsClipboardFill } from "react-icons/bs";

import { BsEyeFill } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className=" ">
        <div className="flex flex-col  " style={style}>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl text-center flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsList className="m-auto" />
            Navbar
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsPersonCircle className="m-auto" />
            About
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsClipboardFill className="m-auto" />
            Resume
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col  hover:bg-gray-600 cursor-pointer">
            <BsEyeFill className="m-auto" />
            Works
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsGrid1X2 className="m-auto" />
            Stats
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsKeyFill className="m-auto" />
            Skills
          </div>
          <div className="p-2 m-1 text-white bg-zinc-800 rounded-xl flex flex-col hover:bg-gray-600 cursor-pointer">
            <BsSendFill className="m-auto" />
            Contacts
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
