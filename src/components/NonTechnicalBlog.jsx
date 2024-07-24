import React from "react";

const blogTitle = [
  {
    id: 1,
    title: "Wow, What the 20s",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 2,
    title: "The little fire hard to see but carries light",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 3,
    title: "The inner soul",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 4,
    title: "Loaded",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 5,
    title: "Again and Again",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
  {
    id: 6,
    title: "Song that has meaning",
    link: "https://medium.com/@zk214obscure/wow-what-the-20s-cb3bbcb5d07b",
  },
];

const NonTechnicalBlog = () => {
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

export default NonTechnicalBlog;
