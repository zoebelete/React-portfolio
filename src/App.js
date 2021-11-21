import React from "react";
import "./App.css";
import Header from "./Header";
import Info from "./Info";
import Infoo from "./Infoo";
import Infotwo from "./Infotwo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <section className="bg-gradient-to-b from-gray-900 via-gray bg-gray-900 to-gray-800">
        <Header />
      </section>
      <section className="flex flex-col  bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 h-screen ">
        <Home />
      </section>

      <section className="bg-gray-800 h-screen" id="about">
        <Info />
      </section>

      <section className="bg-gray-800">
        <h1 className=" font-bold  text-4xl text-gray-300">Projects</h1>
      </section>
      <section className="bg-gray-800" id="projects">
        <Infoo />
      </section>
      <section className="bg-gray-800">
        <h1 className=" font-bold pt-10 pb-0 text-4xl text-gray-300">
          Technologies
        </h1>
      </section>

      <section className="bg-gray-800 " id="technologies">
        <Infotwo />
      </section>

      <section class="" id="contact">
        <footer class="flex justify-evenly bg-gray-900 pb-10">
          <a className="text-white" href="https://github.com/zoebelete">
            {" "}
            <GitHubIcon />{" "}
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/hiwot-belete-37909a225/"
          >
            {" "}
            <LinkedInIcon />{" "}
          </a>
          <a className="text-white" href="https://twitter.com/hiwotbelete14">
            {" "}
            <TwitterIcon />{" "}
          </a>
        </footer>
      </section>
    </div>
  );
}

export default App;
