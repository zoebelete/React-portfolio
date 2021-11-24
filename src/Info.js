import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info ">
      <div className="info_left ">
        {/* <p>
          <h2 className="font-bold text-4xl text-gray-400">HIWOT BELETE</h2>
        </p> */}
        <h1 className="text-2xl font-bold text-white italic">
          Hello,Looking for a Developer?
        </h1>
        <p className=" text-gray-400 text-xl mt-5">
          Full stack developer graduated from university
          <br />
          of Gondar recently in information system with a great GPA
          <br />
          that i worked hard for having lots of experience in this field.
        </p>
        <button className="mt-5 hover:bg-gray-700 ">
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
