import React from 'react'
import Banner from '../components/home/Banner'
import VehicleCard from '../components/VehicleCard'
import { CarModel } from '../components/home/CarModel'
const Vehicle = () => {
  return (
    <div className="w-full h-fit">
    <Banner title="Vehicle Models"/>
    <div className='w-full  grid  grid-cols-1 place-content-center place-items-center  md:grid-cols-2 lg:grid-cols-3 gap-12  flex-wrap py-14
    '>
     {
      CarModel.map((e)=>{
      return (
        <VehicleCard key={e.id} data={e}/>
      )
      })
     }
    </div>
        </div>
  )
}

export default Vehicle