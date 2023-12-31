import React, { useEffect, useState } from 'react'
import CarBox from './CarBox'
import { CAR_DATA } from './CarData'
const Model = () => {
  const [activeCar,SetActiveCar]= useState(CAR_DATA[0].name)
  const [data,setData] = useState(CAR_DATA[0])
  function handleClick(e){
    SetActiveCar(e.target.innerText); 
    setData(CAR_DATA[e.target.id])
}
useEffect(()=>{
  console.log(activeCar)
   console.log(data)
},[activeCar])


  return (
    <div className="w-full lg:h-[100vh] h-[180vh]">
         <div className="flex flex-col h-[15%]  items-center justify-center gap-3 text-center">
        <h5 className=" font-semibold text-2xl md:text-3xl ">Vehicle Models</h5>
        <h1 className="font-extrabold text-4xl md:text-5xl">Our <span className="text-orange-500">Rental</span> fleet</h1>
        <p className="w-4/5 md:w-2/5 text-gray-500 font-semibold">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>
      <div className="h-4/5 w-full mt-5  flex flex-col lg:flex-row items-center justify-evenly gap-3">
        <div className="w-full lg:w-1/4 h-2/5 flex items-center justify-between flex-col">
            {
             CAR_DATA.map((cars,i)=>{
                return (
                   <div className={`w-full flex justify-center items-center py-4 text-center font-semibold hover:text-white hover:bg-orange-500 ${activeCar == cars.name ? "bg-orange-500 text-white" : "bg-gray-200"} transition-all`} onClick={handleClick} id={i}>{cars.name}</div>
                )
             }  ) 
            }
        </div>
        <CarBox data={data}/>
      </div>
    </div>
  )
}

export default Model