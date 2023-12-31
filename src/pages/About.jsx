import React, { useEffect, useState } from 'react'
import Banner from '../components/home/Banner'
import Feature from '../components/home/Feature'
import bgIamge from "../images/about/about-main.jpg"
import CountUp from 'react-countup';
import { about } from '../constants'
const About = () => {
  
  return (
    <div className="w-full h-fit ">
    <Banner title={"About"}/>
    <div className="w-full  lg:h-[90vh]  flex items-center justify-center flex-col lg:flex-row bg" >
      <img src={bgIamge} className="w-3/5 min-w-[300px] md:w-3/5 lg:w-1/3 aspect-square object-contain"/>
      <div className='w-4/5 md:w-3/5 lg:w-1/3  h-fit   sm:pl-5 text-center lg:text-left'>
        <h3 className=" font-bold lg:mt-5 text-2xl"> UNIQ<span className="text-orange-500 font-serif">Rental</span> </h3>
        <h1 className="font-extrabold mt-3 font-serif text-3xl lg:text-5xl w-full ">You start the engine and your adventure begins</h1>
        <p className="text-gray-500 font-semibold mt-2 md:my-5">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
        <div className="w-full flex justify-center items-center mt-12 sm:mt-0  flex-col sm:flex-row gap-8">
          <div className="w-1/3  flex flex-col items-center justify-center">
            <img src={about['carTypes'].image} className="md:w-1/2"/>
             <p className="text-gray-500 font-semibold flex flex-col text-xl  h-20 justify-between whitespace-nowrap md:flex-row md:whitespace-normal"><span className="font-extrabold text-5xl md:text-3xl text-black md:w-1/2">{<CountUp  end={about['carTypes'].value} duration={2}/>}</span>{about['carTypes'].title}</p>
          </div>
          <div className="w-1/3  flex flex-col items-center ">
            <img src={about['rentalOutlet'].image} className="md:w-1/2"/>
             <p className="text-gray-500 font-semibold flex flex-col text-xl  h-20 justify-between whitespace-nowrap md:flex-row md:whitespace-normal"><span className="font-extrabold text-5xl md:text-3xl text-black ">{<CountUp  end={about['rentalOutlet'].value} duration={2}/>}+</span>{about['rentalOutlet'].title}</p>
          </div>
          <div className="w-1/3  flex flex-col items-center">
            <img src={about['repairShop'].image} className="md:w-1/3"/>
             <p className="text-gray-500 font-semibold flex flex-col text-xl  h-20  justify-between  whitespace-nowrap md:flex-row md:whitespace-normal"><span className="font-extrabold text-5xl md:text-3xl text-black">{<CountUp  end={about['repairShop'].value} duration={2}/>}</span>{about['repairShop'].title}</p>
          </div>
        </div>
      </div>
    </div>
    <Feature/>
    </div>
  
  )
}

export default About