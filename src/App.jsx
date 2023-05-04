import { Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";

import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="flex  ">
          <div className="md:fixed md:left-0 md:top-0 md:h-screen md:w-[10%]  ">
            <Navbar />
          </div>
          <div className="md:flex justify-center items-center md:w-[90%] md:ml-auto ">
            <Routes>
              <Route path="/" element={<Home1 />} />

              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
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
