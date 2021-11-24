import React from "react";
import "./Infotwo.css";

function Infotwo() {
  return (
    <div className="flex-col relative flex justify-center items-center">
      <h1 className="absolute bottom-64 text-white text-5xl">Technologies</h1>
      <div className="infotwo flex justify-evenly">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20">
          <div class="rounded overflow-hidden  md:shadow-lg bg-gray-200 ">
            <div class="px-20 py-10">
              <div class="font-bold text-xl mb-2 ">UI/UX</div>
              <p class="text-gray-700 text-base font-semibold">
                <ul>
                  <li>Figma</li>
                  <li> Material UI</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden  md:shadow-lg bg-gray-200 ">
            <div class="px-20 py-10">
              <div class="font-bold text-xl mb-2 ">Front end</div>
              <p class="text-gray-700 text-base font-semibold">
                <ul>
                  <li>HTML, CSS, TAILWIND-CSS</li>
                  <li>React.js, React-Redux</li>
                  <li>Chart.js</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="rounded overflow-hidden  md:shadow-lg bg-gray-200 ">
            <div class="px-20 py-10">
              <div class="font-bold text-xl mb-2 ">Back end</div>
              <p class="text-gray-700 text-base font-semibold">
                <ul>
                  <li>Firebase</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infotwo;
