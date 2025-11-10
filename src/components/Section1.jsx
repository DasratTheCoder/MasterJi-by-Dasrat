import React from 'react'
import "./Section1.css"
import img from '../assets/hero_img.png'
const Section1 = () => {
    return (
        <>
            <section className='flex justify-around'>
                <div className=" text-white  h-[350px] w-[600px]">
                    <div className='h-[350px] w-[600px]'>
                        <h1 id='all-h1' className="mt-32 text-6xl font-[700]  leading-[1.2]">Show Your <span id='span-work' className='text-[#fb923c] '>Work.</span> <br />
                            Build for the Real<br /> World.</h1>
                        <p className="flex justify-center text-[21px] mt-[4px] text-[#9f9b9b]">Learning should be fun and rewarding. We're here to help you <br /> achieve.</p>
                    </div>

                    <div className="btn  w-96 flex justify-around">
                        <button className='bg-orange-400 h-12 w-44 rounded-md '>Start Your Journey</button>
                        <button className='bg-gray-800 h-12 w-44 rounded-md '>Watch Demo</button>
                    </div>
                </div>
                <div className=" text-white  h-[608px] w-[716px] ">
                    <div className='flex items-center h-[608px] w-[716px] font-6xl'>
                        <img src={img} alt="" />
                    </div>
                </div>

            </section>
            <div className='text-white  w-[600px] h-24 flex justify-evenly'>
                <div className=' w-40 flex justify-center items-center text-xl font-bold'>
                    <div> <div className='flex justify-center text-2xl'>1000+</div> <span>Blogs Written</span></div>
                </div>
                <div className=' w-40 flex justify-center items-center text-xl font-bold'>
                    <div> <div className='flex justify-center text-2xl'>500+</div> <span>Projects Built</span></div>
                </div>
                <div className=' w-40 flex justify-center items-center text-xl font-bold'>
                    <div> <div className='flex justify-center text-2xl'>15+</div> <span>Courses</span></div>
                </div>

            </div>
        </>
    )
}

export default Section1