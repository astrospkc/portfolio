import { Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/About";

import Works from "./components/Works";

import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col overflow-x-hidden ">
          <div className=" fixed md:left-0 md:top-0 h-fit md:h-screen w-fit md:w-[10%] md:bg-black  ">
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
      </Router>
    </>
  );
}

export default App;
