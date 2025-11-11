import React from 'react'
import './Section2.css'
import FeaturesSection from './FeaturesSection'
const Section2 = () => {
  return (
    <>
    <div id='div-the-container' className='h-[100vh] w-[98vw] text-white'>
        <div className=''>
            <h1 className='text-4xl flex justify-center items-center'>Features</h1>
            <p className='flex justify-center items-center pt-4 text-[#5a5a5b]'>Everything you need to transform learning into real-world skills.</p>
        </div>

    <FeaturesSection/>
    </div>
    </>
  )
}

export default Section2