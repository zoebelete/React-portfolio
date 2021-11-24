import React from "react";
import "./Home.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Home() {
  return (
    <div className="">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-5">
        <div class="rounded overflow-hidden ">
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
        </div>

        <div class="rounded overflow-hidden mx-24 flex justify-center items-center">
          <div className="text-gray-400      flex-grow">
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

export default Home;
