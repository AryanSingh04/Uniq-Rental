import React from 'react'
import { motion } from "framer-motion"
import Form from "./Form"

const Hero = () => {
  return (
    <div className="w-full h-[172vh] md:h-[150vh]">
    <div className='flex w-full h-[55%] '>
    <div className=" w-full h-full md:w-1/2 flex flex-col justify-center pl-14 absolute z-10 md:static">
    <h1 className=" font-extrabold text-4xl md:text-5xl">Premium Car <span className="text-orange-500">Rental</span> in Mumbai.</h1>
        <p className="mt-12 text-gray-600 w-4/5 font-bold text-md">
            Don't Deny Yourself the pleasure of driving the best premium cars from around the world here and now.
        </p>
        <a className="w-32 h-10  py-1 px-4 ml-12 mt-20 rounded-none transition-all  transition-rounded hover:rounded-full text-center hover:text-white cursor-pointer  bg-orange-600 flex items-center justify-center custom-box-shadow hover:bg-orange-700  font-medium text-xl" href='#booknow '>Book Now</a>
    </div>
    <div className=" sm:block w-full md:w-1/2 h-full">
       <motion.img src="https://st.automobilemag.com/uploads/sites/10/2018/05/2018-bmw-2-series-230i-sport-line-convertible-side-view.png" initial={{x:500}} animate={{x:0}} transition={{duration:1}} className="absolute -bottom-24 
       md:w-[50%] z-1
       md:top-[50%] md:r-[50%] md:translate-x-[-50%] md:translate-y-[-50%]"/> 
    </div>
    </div>
    <div className="h-2/5 flex items-center justify-center" id='booknow'>
        <Form/>
        </div>
    </div>
  )
}

export default Hero