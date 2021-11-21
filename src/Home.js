import React from "react";
import "./Home.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Home() {
  return (
    <div className="flex">
      <div className="m-auto ml-10 mt-20">
        <p className="text-6xl pt-20 font-bold font-serif animate-pulse text-white italic">
          HIWOT BELETE
        </p>
        <h1 className="text-3xl text-gray-400">Full stack developer</h1>
        <button className="button animate-pulse">
          <a href="#about">
            {" "}
            <h3>About me</h3>
          </a>
        </button>
      </div>

      <div className="text-gray-400 animate-bounce  m-auto pt-28  flex-grow">
        <ArrowDownwardIcon />
        <h1>Know more </h1>
      </div>
    </div>
  );
}

export default Home;
