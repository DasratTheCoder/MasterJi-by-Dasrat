import React from 'react'
import img from '../assets/hero_img.png'

const Section1 = () => {
  return (
    <div className="w-[98vw]  text-white  sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start md:pt-20 pt-10">
        
        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 md:mt-0">
            Show Your <span className="text-orange-400">Work.</span><br />
            Build for the Real<br /> World.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Learning should be fun and rewarding. We're here to help you achieve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <button className="bg-orange-400 hover:bg-orange-500 h-12 w-full sm:w-44 rounded-md font-medium transition">
              Start Your Journey
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 h-12 w-full sm:w-44 rounded-md font-medium transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end mb-10 md:mb-0">
          <img
            src={img}
            alt="Hero"
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row  items-center gap-8 sm:gap-16 mt-14 text-center">
        <div>
          <div className="text-3xl font-bold">1000+</div>
          <span className="text-lg text-gray-300">Blogs Written</span>
        </div>
        <div>
          <div className="text-3xl font-bold">500+</div>
          <span className="text-lg text-gray-300">Projects Built</span>
        </div>
        <div>
          <div className="text-3xl font-bold">15+</div>
          <span className="text-lg text-gray-300">Courses</span>
        </div>
      </div>
    </div>
  )
}

export default Section1
