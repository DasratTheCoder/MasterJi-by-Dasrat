import React from 'react'
import "./Navbar.css";
import WhiteIcon from "./WhiteIcon";

const Navbar = () => {
  return (
    <>
      <nav className="h-[69px] w-full flex justify-start items-center sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-[#626262]/40">
        {/* Left Side Box */}
        <div id="my-box" className="border-r-[2px] border-dotted border-[#626262] border-b-[2px] w-20"></div>

        {/* Middle Section */}
        <div id="bottom-div" className="w-[90%] border-r-[2px] border-dotted border-[#626262] border-b-[2px] flex justify-between items-center">
          <div className="text-white ml-9">
            <p id="p-master" className="text-3xl font-semibold">
              Master<span className="text-orange-400">Ji</span>
            </p>
          </div>

          <div className="text-white mr-12 mt-3 flex items-center gap-3">
            <div className="icon flex items-center gap-3">
              <i className="fa-solid fa-circle-half-stroke text-white"></i>
              <WhiteIcon />
            </div>
            <div className="btn">
              <button className="bg-orange-400 hover:bg-orange-500 h-9 w-28 rounded transition">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Box */}
        <div id="lower-div" className="border-dotted border-[#626262] border-b-[2px] w-20"></div>
      </nav>
    </>
  )
}

export default Navbar
