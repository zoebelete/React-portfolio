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
    <div className="App bg-gray-800">
      <section className="bg-gradient-to-b from-gray-900 via-gray bg-gray-900 to-gray-800">
        <Header />
      </section>
      <section className="flex flex-col  bg-gray-800 h-screen ">
        <Home />
      </section>

      <section className="bg-gray-800 h-96" id="about">
        <Info />
      </section>

      <section className="bg-gray-800" id="projects">
        <section className="bg-gray-800 ">
          <h1 className=" font-bold  text-4xl  text-gray-300">Projects</h1>
        </section>
        <Infoo />
      </section>
      <section className="bg-gray-800">
        <h1 className=" font-bold  text-4xl text-gray-300">Technologies</h1>
      </section>
      <section className="bg-gray-800" id="technologies">
        <Infotwo />
      </section>

      <section className="" id="contact">
        <footer class="flex h-10 bg-gray-900 justify-center ">
          <a className="text-white" href="https://github.com/zoebelete mt-10">
            <GitHubIcon />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/hiwot-belete-37909a225/"
          >
            <LinkedInIcon />
          </a>
          <a className="text-white" href="https://twitter.com/hiwotbelete14">
            <TwitterIcon />
          </a>
        </footer>
      </section>
    </div>
  );
}

export default App;
