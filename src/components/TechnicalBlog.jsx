import React from "react";

const blogTitle = [
  {
    id: 1,
    title: "TODO Application — using file functions in Java",
    link: "https://medium.com/@punamkumari399/todo-application-using-file-functions-in-java-a7779ab2d591",
  },
  {
    id: 2,
    title: "Traditional and JWT authentication difference",
    link: "https://punam-1674812033403.hashnode.dev/traditional-and-jwt-authentication-difference",
  },
  {
    id: 3,
    title: "Using map and props in react to get data from .js file.",
    link: "https://punam-1674812033403.hashnode.dev/using-map-and-props-in-react-to-get-data-from-js-file",
  },
  {
    id: 4,
    title: "How javascript works?",
    link: "https://punam-1674812033403.hashnode.dev/how-javascript-works",
  },
  {
    id: 5,
    title: "JavaScript - setTimeout + closures",
    link: "https://punam-1674812033403.hashnode.dev/javascript-settimeout-closures",
  },
];

const TechnicalBlog = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-indigo-400 to-indigo-900 justify-center items-center m-auto ">
        <div className="justify-center items-center m-auto flex p-10 border-black border-2 text-2xl font-bold">
          Non-Technical Blogs
        </div>
        <div className="grid grid-cols-2 w-screen h-screen justify-between items-center px-20 border-2 border-gray-400">
          {blogTitle.map((blog) => {
            return (
              <div
                key={blog.id}
                className="justify-center items-center p-10 shadow-lg shadow-black w-fit hover:bg-gray-800 hover:cursor-pointer "
              >
                <h1 className="hover:text-xl font-semibold hover:font-bold text-gray-200 border-b-2 border-gray-300">
                  {blog.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechnicalBlog;
