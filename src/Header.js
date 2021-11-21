import React from "react";
import "./Header.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <div className="header h-20">
      <div className="header_left flex">
        <img
          className="h-20 pl-5"
          src="https://cdn4.vectorstock.com/i/1000x1000/74/03/hb-logo-monogram-emblem-style-with-crown-shape-vector-31117403.jpg"
          alt=""
        />
        <h1 class="font-bold pt-7 text-2xl text-gray-400">Portfolio</h1>
      </div>

      <div className="header_right justify-between font-semibold text-xl ">
        <a href="#about">
          {" "}
          <h3>About me</h3>
        </a>
        <a href="#projects">
          {" "}
          <h3>Projects</h3>
        </a>
        <a href="#technologies">
          {" "}
          <h3>Technologies</h3>
        </a>
        <a href="#contact">
          {" "}
          <h3>Contact me</h3>
        </a>
        <div className="mr-0">
          <a
            className="text-gray-400 hover:white"
            href="https://github.com/zoebelete"
          >
            {" "}
            <GitHubIcon />{" "}
          </a>
          <a
            className="text-gray-400 hover:white"
            href="https://www.linkedin.com/in/hiwot-belete-37909a225/"
          >
            {" "}
            <LinkedInIcon />{" "}
          </a>
          <a
            className="text-gray-400 hover:white"
            href="https://twitter.com/hiwotbelete14"
          >
            {" "}
            <TwitterIcon />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
