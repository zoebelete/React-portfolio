import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info ">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-5">
        <div class="rounded overflow-hidden ">
          <div className="info_left mt-10">
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
        </div>

        <div class="rounded overflow-hidden mx-24 hidden sm:inline-flex md:inline-flex justify-center items-center">
          <div className="text-gray-400 flex-grow">
            <div className=" ">
              <img
                class="h-96 flex justify-center items-center"
                src="https://i.ibb.co/mbrVPGB/20210813-165527-removebg-preview.png"
                alt=""
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
