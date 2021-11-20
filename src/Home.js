import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <p className="text-6xl pt-60 font-bold font-serif animate-pulse">
        HIWOT BELETE
      </p>
      <h1 className="text-3xl">Full stack developer</h1>
      <button className="button animate-pulse">
        <a href="#about">
          {" "}
          <h3>About me</h3>
        </a>
      </button>
    </div>
  );
}

export default Home;
