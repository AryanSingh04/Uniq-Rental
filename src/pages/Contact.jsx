import React from 'react'
import Banner from '../components/home/Banner'
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <div className="w-full h-fit mb-8 overflow-x-hidden">
     <Banner title="Contact"/>
     <div className="w-full h-fit  flex flex-col lg:flex-row">
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full pt-8  lg:pl-24 lg:pt-24">
        <h2 className="font-extrabold text-center text-4xl lg:text-5xl lg:text-left lg:w-3/5">Need additional information?</h2>
        <p className="font-semibold text-gray-600 mt-8 w-3/4 lg:w-3/5 mx-auto text-center lg:text-left lg:mx-0">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <div className="w-full mt-4 h-fit flex flex-col items-center justify-center lg:items-start md:gap-2 gap-4 ">
        <div className="flex gap-2 items-center font-medium text-xl hover:text-orange-600 transition-all"><MdOutlineLocalPhone/><a >123567890</a></div>
        <div className="flex gap-2 items-center font-medium text-xl hover:text-orange-600 transition-all"><FaRegEnvelope/><a href="mailto:uniqrenatal@abc.com" target="_blank">uniqrental@abc.com</a></div>
        <div className="flex gap-2 items-center font-medium text-xl hover:text-orange-600 transition-all"><MdLocationOn/><a href='https://www.google.com/maps/place/Mumbai' target="_blank">Mumbai,India
          </a></div>
        </div>
      </div>
      <div className="w-full mt-12 md:mt-0 h-1/2 lg:w-1/2 lg:h-full overflow-x-hidden">
        <label htmlFor='name'>
          <p className="font-bold text-xl md:my-2  text-center md:text-left">Full Name <span className="text-orange-600">*</span></p>
        <input type="text" placeholder='Ex."Aryan Singh"' className="pl-6 ml-[2.5%] md:ml-0 w-[95%]  h-12  bg-[#f2f2f2]" id='name'/>
        </label>

        <label htmlFor='email'>
          <p className="md:my-2 font-bold text-xl text-center md:text-left">Email<span className="text-orange-600">*</span></p>
        <input type="text" placeholder='Ex."abc@gmail.com"' className="pl-6 ml-[2.5%] w-[95%] md:ml-0 h-12 bg-[#f2f2f2]" id='email'/>
        </label>
        <label htmlFor="text" >
        <p className="md:my-2 font-bold text-xl  text-center md:text-left">Tell us about It<span className="text-orange-600">*</span></p>
      <textarea name="" id="text" placeholder='Write Here...' className="pl-6 md:ml-0  ml-[2.5%] w-[95%]  h-52 bg-[#f2f2f2]"></textarea>
        </label>
        <button
  className=" ml-[2.5%] md:ml-0  w-[95%] h-10 flex  items-center mt-5 justify-center font-bold text-xl text-white transition-all cursor-pointer
  bg-orange-600  custom-box-shadow hover:bg-orange-700 "
>       <h2>Book Now</h2>
      </button>
      </div>
     </div>
    </div>
   
  )
}

export default Contact