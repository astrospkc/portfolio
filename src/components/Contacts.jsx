import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Contacts = () => {
  return (
    <>
      <div className="mx-10">
        <ul className="my-9">
          <li className="flex flex-row mx-6">
            <BsLinkedin className="text-white  text-3xl" />
            <h1 className="ml-9">linkedin</h1>
          </li>
          <li>
            <BsGithub className="text-white text-3xl mt-10" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
