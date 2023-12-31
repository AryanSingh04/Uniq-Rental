import React from 'react'
import Hero from '../components/home/Hero'
import Feature from '../components/home/Feature'
import Model from '../components/home/Model'
import WrapperReview from '../components/WrapperReview'
const Home = () => {
  return (
      <div className="w-full h-fit ">
        <Hero/>
       <Feature />
       <Model/>
       <div className="w-full h-fit flex items-center justify-center flex-col mt-5 md:mt-0">
      <h5 className="font-semibold text-lg md:text-xl">Reviewed by People</h5>
      <h1 className="font-bold text-3xl md:text-5xl">Client's Testimonials</h1>
      <p className="text-gray-500 text-center w-4/5 lg:w-2/5">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
    </div>
       <WrapperReview/>
        </div>
  )
}

export default Home