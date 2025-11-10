import React from 'react'
import "./Navbar.css";
import WhiteIcon from "./WhiteIcon";

const Navbar = () => {
  return (
    <>
      <nav className='h-[69px] w-screen flex justify-start items-center sticky top-0 bg-black z-50'>
        <div id='my-box' className='border-r-[2px] border-dotted border-[#626262] border-b-[2px] w-20'></div>
        
        <div id='bottom-div' className='w-[90%] border-r-[2px] border-dotted border-[#626262] border-b-[2px] items-center flex justify-between'>
          <div className='text-white ml-9'>
            <p id='p-master' className='text-3xl'>
              Master<span>Ji</span>
            </p>
          </div>

          <div className='text-white mr-12 mt-3 flex items-center gap-3'>
            <div className="icon flex items-center gap-3">
              <i className="fa-solid fa-circle-half-stroke text-white"></i>
              <WhiteIcon />
            </div>
            <div className="btn">
              <button className='bg-orange-400 h-9 w-28 rounded'>Get Started</button>
            </div>
          </div>
        </div>

        <div id='lower-div' className='border-dotted border-[#626262] border-b-[2px] w-20'>h</div>
      </nav>
    </>
  )
}

export default Navbar
