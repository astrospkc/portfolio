import React from "react";
import style from "./style";
import { Link } from "react-router-dom";
// import weatherImage from "../Images/weatherImage.png";
// import web from "./web.jpg";
// import movieFrontImage from "./movie.png";
// import image from "./blog.png";
// import youtubeClone from "../Images/youtubeClone.png";
// import foodPage from "../Images/1.png";

const works = [
  {
    id: 1,
    title: "DXV",
    toolsUsed: [
      "Nextjs",
      "HTML",
      "Tailwind",
      "Shadcn ui",
      "TypeScript",
      "Supabase",
      "Drizzle",
      "Expressjs",
    ],
    // imageLink: image,
    content:
      "DXV - a new and interactive way to connect with the same kind of people. This app provide features to search for similar groups , tweet, and ask permission to connect with other groups",

    githubLink:
      "https://github.com/astrospkc/DXV---get-in-touch-with-your-kind-of-people",
  },
  {
    id: 2,
    title: " O-transac backend",
    toolsUsed: ["Expressjs", "Javascript", "Mongoose"],
    // imageLink: weatherImage,
    content:
      "O-transac - This gives the functionality of taking loan, and disbursal of loan. This app is backend for O-transac frontend. I have used expressjs for backend and mongoose for database. I have used mongodb for database. ",

    githubLink: "https://github.com/astrospkc/O-Transac-Backend",
  },
  {
    id: 3,
    title: "O-transac frontend ",
    toolsUsed: ["Nextjs", "HTML", "Tailwind", "Shadcn ui", "Javaascript"],
    // imageLink: youtubeClone,
    content:
      "O-transac - This gives the functionality of taking loan, and disbursal of loan. This app is backend for O-transac frontend. I have used expressjs for backend and mongoose for database. I have used mongodb for database. ",

    githubLink: "https://github.com/astrospkc/O-transac",
  },
];

const ExperimentalThings = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-r   md:m-7  flex flex-col justify-center items-center  w-screen  md:p-5">
        <div className="my-4 ">
          <h1 className=" text-3xl md:text-6xl font-semibold my-4 text-gray-600 text-center  ">
            EXPERIMENT
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-5 skillsanimate justify-center items-center  ">
          {works.map((work) => {
            return (
              <div
                key={work.id}
                className="flex  flex-col justify-center relative items-center m-4  p-3 shadow-lg shadow-black w-fit rounded-xl "
              >
                {/* <img
                  src={work.imageLink}
                  alt=""
                  className="w-full rounded-xl mb-4"
                /> */}
                <div className="absolute top-[50%] left-[30%] hover:hidden">
                  <h1 className="text-bold text-xl md:text-3xl">
                    {work.title}
                  </h1>
                </div>
                <div className="mx-4 flex flex-col justify-center items-center w-fit">
                  <div className="my-2">
                    <ul className="grid grid-cols-3 md:grid-cols-4 my-3 ">
                      {work.toolsUsed.map((tool, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-zinc-700 text-gray-300 px-2 mr-3 mb-2  w-full rounded-xl text-xs md:text-sm"
                          >
                            {tool}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="multiline text-white text-sm md:text-md w-fit ">
                    {work.content}
                  </p>
                  <div className="flex flex-row">
                    {/* <Link to={work.siteLink}>
                      <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 mx-3 text-sm md:text-lg text-yellow-600 ">
                        View site
                      </button>
                    </Link> */}
                    <Link to={work.githubLink}>
                      <button className="px-2 border-r-2 border-l-2 rounded-lg mt-4 text-sm md:text-lg text-yellow-600 ">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExperimentalThings;
