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
      <Header />
      <section className="flex flex-col h-screen bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400  ">
        <Home />
      </section>

      <section id="about">
        <Info />
      </section>

      <section>
        <h1 className=" font-bold pt-20 text-4xl">Projects</h1>
      </section>
      <section id="projects">
        <Infoo />
      </section>
      <section>
        <h1 className=" font-bold pt-10 pb-0 text-4xl">Technologies</h1>
      </section>

      <section id="technologies">
        <Infotwo />
      </section>

      <section class="pt-20" id="contact">
        <footer class="pt-20 flex justify-evenly bg-gray-900 pb-10">
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
