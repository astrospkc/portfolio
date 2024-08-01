import { Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/About";

import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import WorkSample from "./components/WorkSample";
import TechnicalBlog from "./components/TechnicalBlog";
import NonTechnicalBlog from "./components/NonTechnicalBlog";
import Sketches from "./components/Sketches";
import ExperimentalThings from "./components/ExperimentalThings";
import HomeRecreate from "./components/HomeRecreate";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col ">
          <div className=" fixed  md:top-0 h-fit w-screen md:bg-black z-10  ">
            <Navbar />
          </div>

          <div className="flex justify-center items-center w-full md:w-screen md:ml-auto py-14 ">
            <Routes>
              <Route path="/" element={<HomeRecreate />} />

              <Route path="/about" element={<About />} />

              <Route path="/works" element={<WorkSample />} />

              <Route path="/skills" element={<Skills />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/technical" element={<TechnicalBlog />} />
              <Route path="/nonTechnical" element={<NonTechnicalBlog />} />
              <Route path="/sketches" element={<Sketches />} />
              <Route
                path="/experimentalProjects"
                element={<ExperimentalThings />}
              />
            </Routes>
          </div>
        </div>
      </Router>
      {/* <Router>
        <div className="flex flex-col overflow-x-hidden ">
          <div className=" fixed md:left-0 md:top-0 h-fit md:h-screen w-fit md:w-[10%] md:bg-black z-10  ">
            <Navbar />
          </div>

          <div className="flex justify-center items-center w-full md:w-[90%] md:ml-auto  ">
            <Routes>
              <Route path="/" element={<Home1 />} />

              <Route path="/about" element={<About />} />

              <Route path="/works" element={<Works />} />

              <Route path="/skills" element={<Skills />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </Router> */}
    </>
  );
}

export default App;
