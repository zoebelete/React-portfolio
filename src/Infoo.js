import React from "react";
import "./Infoo.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Infoo() {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full h-96"
          src="https://i.ibb.co/8XNHWTL/linkedin.png"
          alt="Linkedin clone"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-300">Linkedin clone</div>
          <p class="text-gray-400 text-base">
            This is a linkedin clone project built React, Redux, Firebase,
            Material UI. Stack React Redux Firebase Material Design
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {" "}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {" "}
            <a href="https://github.com/zoebelete/Linkedin-clone">
              <GitHubIcon />{" "}
            </a>{" "}
          </span>{" "}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="https://zoe-linkedin.netlify.app">View website</a>{" "}
          </span>{" "}
        </div>
      </div>
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full h-96"
          src="https://i.ibb.co/qpfk0z1/gmai.png"
          alt="gmail clone"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-300">Gmail clone</div>
          <p class="text-gray-400 text-base">
            This is a Gmail clone project built React, Redux, Firebase, Material
            UI. Stack React Redux Firebase Material Design
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {" "}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {" "}
            <a href="https://github.com/zoebelete/Linkedin-clone">
              <GitHubIcon />{" "}
            </a>{" "}
          </span>{" "}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="https://zoe-linkedin.netlify.app">View website</a>{" "}
          </span>{" "}
        </div>
      </div>
    </div>

    // <div className="flex justify-evenly items-center">

    //   <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20">
    //     <div class="rounded overflow-hidden shadow-lg ">
    //       <img
    //         class="w-full h-64"
    //         src="https://i.ibb.co/8XNHWTL/linkedin.png"
    //         alt="Mountain"
    //       />
    //       <div class="px-6 py-4">
    //         <div class="font-bold text-xl mb-2 text-gray-300">
    //           Linkedin clone
    //         </div>
    //         <p class="text-gray-400 text-base">
    //           linkedin clone website using <b>react.js</b>, <b>redux</b>,{" "}
    //           <b>material ui</b>,<b>firebase database</b> and run perfectly.
    //         </p>
    //       </div>
    //       <div class="px-6 pt-4 pb-2">
    //         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //           <a href="https://github.com/zoebelete/Linkedin-clone">
    //             <GitHubIcon />
    //           </a>
    //         </span>
    //         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //           <a href="https://zoe-linkedin.netlify.app">View website</a>
    //         </span>
    //       </div>
    //     </div>
    //     <div class="rounded overflow-hidden shadow-lg">
    //       <img
    //         class="w-full h-64"
    //         src="https://i.ibb.co/Nrr91C9/Gmail.png"
    //         alt="River"
    //       />
    //       <div class="px-6 py-4">
    //         <div class="font-bold text-xl mb-2 text-gray-300">Gmail clone</div>
    //         <p class="text-gray-400 text-base">
    //           Gmail clone website using <b>react.js</b>, <b>redux</b>,{" "}
    //           <b>material ui</b>,<b>firebase database</b> and run perfectly.
    //         </p>
    //       </div>
    //       <div class="px-6 pt-4 pb-2">
    //         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //           <a href="https://github.com/zoebelete/Linkedin-clone">
    //             <GitHubIcon />
    //           </a>
    //         </span>
    //         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //           <a href="https://zoe-linkedin.netlify.app">View website</a>
    //         </span>
    //       </div>
    //     </div>

    /* <div class="rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg"
            alt="Forest"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Forest</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mountain</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg"
            alt="River"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">River</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg"
            alt="Forest"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Forest</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div> */
    //   </div>
    // </div>

    // <div className="infoo">

    //   <div className="infoo_left">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         {/* See more */}
    //         <GitHubIcon />
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">view</button>
    //     </div>
    //   </div>

    //   <div className="infoo_middle">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         See more
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">See more</button>
    //     </div>
    //   </div>

    //   <div className="infoo_right">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         See more
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">See more</button>
    //     </div>
    //   </div>
    //   <div className="infoo_four pt-10">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         See more
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">See more</button>
    //     </div>
    //   </div>
    //   <div className="infoo_five pt-10">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         See more
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">See more</button>
    //     </div>
    //   </div>
    //   <div className="infoo_six pt-10">
    //     <img src="https://i.ibb.co/gMJHXLw/Turkish-textile-sector.jpg" alt="" />
    //     <p>
    //       <h2>Quality Made Fabrics</h2>
    //       we make high quality small-batch and bespoe
    //       <br />
    //       cloth reminiscent of the golden age of textiles.
    //       <br />
    //       Woven in california from the finest sustainably grown fibers.
    //     </p>
    //     <div className="flex justify-evenly pt-5">
    //       <button className="bg-gray-400 w-24 h-10 rounded-md ">
    //         See more
    //       </button>
    //       <button className="bg-gray-400 w-24 h-10 rounded-md">See more</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Infoo;
