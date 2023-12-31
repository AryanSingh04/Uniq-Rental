import React from 'react'
import { GiCarDoor,GiGearStick  } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoCarOutline } from "react-icons/io5";
const VehicleCard = ({data}) => {
  return (
    <div className="w-[350px] h-[550px] border-gray border-4">
        <img src={data.img} alt="" className="h-1/2 bg-black "/>
       <div className="w-full h-1/2 bg-white flex justify-between px-6 py-4">
        <div className="w-full h-full ">    
     <div className="w-full h-1/5 flex items-center justify-between font-bold text-2xl">
        <h3>{data.name}</h3>
       <div className='flex flex-col items-center justify-center'><h3>₹{data.price}</h3>
       <p className="text-gray-500 font-semibold text-sm">per day</p>
       </div>
     </div>
     <div className="w-full h-3/5 ">
       <div className="flex h-1/2">
        <div className="flex w-full h-full items-center justify-between">
   <div className="flex gap-2">
        <IoCarOutline size={25} className=" text-gray-500"/>
        <p className="text-gray-500 font-semibold">{data.mark}</p>
       </div>
       <div className="flex gap-2">
        <p className="text-gray-500 font-semibold">{data.doors}</p>
        <GiCarDoor size={25} className=" text-gray-500"/>
       </div>
        </div>
     
    </div>
    <div className="flex h-1/2">
        <div className="flex w-full h-full items-center justify-between">
   <div className="flex gap-2">
        <GiGearStick size={25} className=" text-gray-500"/>
        <p className="text-gray-500 font-semibold">{data.transmission}</p>
       </div>
       <div className="flex gap-2">
        <p className="text-gray-500 font-semibold">{data.fuel}</p>
        <BsFillFuelPumpDieselFill size={25} className=" text-gray-500"/>
       </div>
        </div>
     
    </div>
      </div>
      <Link to="/" className="w-full h-12 bg-orange-600 flex items-center justify-center custom-box-shadow hover:bg-orange-700 text-white font-medium text-xl">Book Ride</Link>
       </div>
      
   
</div>

 </div>
  )
}

export default VehicleCard