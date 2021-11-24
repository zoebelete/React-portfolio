import React from "react";
import "./Home.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Home() {
  return (
    <div className="flex ">
      <div className="m-auto ml-10 mt-20">
        <p className="text-6xl pt-20 font-bold font-serif animate-pulse text-white italic">
          HI, I'M HIWOT
        </p>
        <p className="text-white text-4xl animate-pulse">
          I DESIGN AND BUILT USER INTERFACES
        </p>
        <button className="button animate-pulse">
          <a href="#about">
            {" "}
            <h3>Learn More</h3>
          </a>
        </button>
      </div>

      <div className="text-gray-400 relative h-64    m-auto pt-28  flex-grow">
        <div className=" ">
          <img
            class="w-max h-96 absolute top-1 left-36"
            src="https://i.ibb.co/mbrVPGB/20210813-165527-removebg-preview.png"
            alt=""
            height="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
