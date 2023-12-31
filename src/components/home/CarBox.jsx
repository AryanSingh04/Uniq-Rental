import React from 'react'

const CarBox = ({data}) => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:w-3/5 h-[90%]  items-center justify-around">
      <img src={data.img} className="w-5/5 md:w-2/5  lg:w-3/5"/>
        <div className="w-4/5 sm:w-4/5 lg:w-2/3 h-full md:h-4/5 lg:h-4/5  flex items-center justify-center">
              <div className="w-[80%] h-full ">
                <div className="h-[15%] md:h-[10%] lg:h-[10%]  flex items-center justify-center bg-orange-500 text-xl text-white font-bold"><span className="text-2xl lg:text-2xl"> ₹ {data.price} </span>/Rent per day</div>
                <div className="h-[80%] md:h-[67%] lg:h-[80%]">
                <div className="w-full h-[95%] bg-white  border-l-2 border-b-2 border-r-2 border-gray-400">
                <div className="w-full h-1/6 flex items-center border-b-2 text-sm border-gray-400">
                  <span className=" w-1/2 text-center border-r-2 border-gray-400">Model</span>    
                  <span className=" w-1/2 text-center">{data.name}</span>
                </div>
                <div className="w-full h-1/6 flex items-center justify-around text-sm border-b-2 border-gray-400">
                <span className=" w-1/2 text-center border-r-2 border-gray-400">Mark</span>    
                  <span className=" w-1/2 text-center">{data.mark}</span>
                 
                </div>
                <div className="w-full h-1/6 flex items-center justify-around text-sm border-b-2 border-gray-400">
                <span className=" w-1/2 text-sm text-center border-r-2 border-gray-400">Year</span>    
                  <span className=" w-1/2 text-center">{data.year}</span>
                </div>
                <div className="w-full text-sm h-1/6 flex items-center justify-around  border-b-2 border-gray-400">
                <span className=" w-1/2 text-center border-r-2 border-gray-400">Doors</span>    
                  <span className=" w-1/2 text-center">{data.doors}</span>
                </div>
                <div className="w-full h-1/6 flex items-center justify-around text-sm border-b-2 border-gray-400">
                <span className=" w-1/2 text-center border-r-2 border-gray-400">Transmission</span>    
                  <span className=" w-1/2 text-center">{data.transmission}</span>
               
                </div>
                <div className="w-full h-1/6 flex items-center justify-around text-sm border-b-2 border-gray-400">
                <span className=" w-1/2 text-center border-r-2 border-gray-400">Fuel</span>    
                  <span className=" w-1/2 text-center">{data.fuel}</span>
                </div>
                </div>
                </div>
                <a className="h-[12%] md:h-[10%]  flex items-center justify-center bg-orange-500 text-xl text-white font-bold shadow-[0.0px_8.0px_0.0px_rgba(0,0,0,.10)] cursor-pointer" href='#booknow'>Reserve Now</a>
              </div>
        </div>
    </div>
  
  )
}

export default CarBox