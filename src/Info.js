import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <div className="info_left pl-20 pt-30">
        <h1 className="text-2xl font-bold">Full Stack Developer</h1>
        <p className="text-base">
          I am Hiwot Belete. Am full stack developer graduated from university
          <br />
          of Gondar recently in information system with a great GPA
          <br />
          that i worked hard for having lots of experience in this field.
        </p>
        <button>
          <a href="#contact">
            {" "}
            <h3>Contact me</h3>
          </a>
        </button>
      </div>
      <div className="info_right ">
        <img
          class="w-max h-80"
          src="https://i.ibb.co/VS1zBc8/20210813-165527.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Info;
