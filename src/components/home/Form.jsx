import React, { useState } from 'react'
import { CAR_DATA } from './CarData'
import { IoCarOutline, IoLocationOutline,IoCalendarOutline  } from "react-icons/io5";
import formBack from "../../images/plan/book-bg.png"
const Form = () => {

  const [data,setData] = useState({
    car:"",pickUp:"",dropOf:"",pickDate:"",dropDate:""
  })
function handleChange(e){
    setData({...data,
    [e.target.name]:e.target.value})
}
 function handleSubmit(e){
   e.preventDefault()
   if(data.car,data.dropDate,data.dropOf,
    data.pickDate,data.pickUp){
    console.log(data)
    setData({  car:"",pickUp:"",dropOf:"",pickDate:"",dropDate:""})
   }
   else{
    alert("Please fill all fields")
   }
 }
  return (
    <div className={`w-3/4 md:w-4/5 md:h-4/5 h-[130%]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 bg-[${formBack}]`}>
       <h3 className="w-full h-8 mt-2 px-8 text-xl font-bold">Book a Car <span className="text-orange-500">*</span></h3>
      <form className=" w-full h-[90%] md:h-4/5 mt-4 flex flex-wrap items-center justify-around">
      <div className="w-full md:w-2/5 lg:w-[30%] h-14 ">
           <label htmlFor='carType'> 
           <div className="h-2/5 flex items-center w-full gap-4 font-semibold text-lg lg:text-xl ">
            <IoCarOutline/> Select Your Car Type <span className="text-orange-500">*</span></div>
           </label>
        <select name="car" id="carType" className="w-full h-3/5 pl-5 text-gray-500 border-gray-300 border-2 rounded-md mt-1" value={data.car} onChange={handleChange}>
          <><option value="">Select your car Type</option></>
          {
            CAR_DATA.map((e)=>{
              return(
              <option value={e.name}>{e.name}</option> )
            })
          }
        </select>
       
      </div>
      <div className="w-full md:w-2/5 lg:w-[30%] h-14 ">
      <label htmlFor="plocation"> 
           <div className="h-2/5 flex items-center w-full gap-4 font-semibold text-lg lg:text-xl"><IoLocationOutline />
Pick-up <span className="text-orange-500">*</span></div>
           </label>
        <select name="pickUp" id="plocation" className="w-full h-3/5 pl-5 text-gray-500  border-gray-300 border-2 rounded-md mt-1" value={data.pickUp} onChange={handleChange}>
          <><option value="">Select pick up location</option></>
          <option value="varanasi">Varanasi</option>
          <option value="mumbai">Mumbai</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="new-delhi">New-Delhi</option>
        </select>
       
      </div>
      <div className="w-full md:w-2/5 lg:w-[30%] h-14 ">
      <label htmlFor='locType'> 
           <div className="h-2/5 flex items-center w-full gap-4 font-semibold text-lg lg:text-xl"><IoLocationOutline />
Drop-of <span className="text-orange-500">*</span></div>
           </label>
        <select name="dropOf" id="location" className="w-full h-3/5 pl-5 text-gray-500  border-gray-300 border-2 rounded-md mt-1" value={data.dropOf} onChange={handleChange}>
          <><option value="">Select drop off location</option></>
          <option value="varanasi">Varanasi</option>
          <option value="mumbai">Mumbai</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="new-delhi">New-Delhi</option>
        </select>
       
      </div>
      <div className="w-full md:w-2/5 lg:w-[30%] h-14 ">
      <label htmlFor='locType'> 
           <div className="h-2/5 flex items-center w-full gap-4 font-semibold text-lg lg:text-xl"><IoCalendarOutline />
Pick-up <span className="text-orange-500">*</span></div>
           </label>
      <input type='date' name="pickDate" className="w-full h-3/5 pl-5 text-gray-500  border-gray-300 border-2 rounded-md mt-1"  onChange={handleChange} value={data.pickDate}/>
       
      </div>
      <div className="w-full md:w-2/5 lg:w-[30%] h-14">
      <label htmlFor='locType'> 
           <div className="h-2/5 flex items-center w-full gap-4 font-semibold text-lg lg:text-xl"><IoCalendarOutline />
Drop-of <span className="text-orange-500">*</span></div>
           </label>
           <input type='date' name="dropDate" className="w-full h-3/5 pl-5 text-gray-500  border-gray-300 border-2 rounded-md mt-1" value={data.dropDate} onChange={handleChange}/>
      </div>
      <button
  className="w-full md:w-2/5 lg:w-[30%]  flex  items-center justify-center font-bold text-xl hover:text-white transition-all cursor-pointer
  h-12 bg-orange-600  custom-box-shadow hover:bg-orange-700 "
  type="submit"
  onClick={handleSubmit}
>       <h2>Book Now</h2>
      </button>
      
     
      </form>
    </div>
  )
}

export default Form