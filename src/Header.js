import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header h-20">
      <div className="header_left">
        <h1 class="font-bold pt-7 text-4xl">HIWOT</h1>
      </div>

      <div className="header_right justify-between font-semibold ">
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
      </div>
    </div>
  );
};

export default Header;
