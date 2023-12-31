import {React,useEffect,useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import icon1 from "../../images/plan/icon1.png"
import icon2 from "../../images/plan/icon2.png"
import icon3 from "../../images/plan/icon3.png"
const Feature = () => {
const imageRef = useRef([])
gsap.registerPlugin(ScrollTrigger);
 useEffect(()=>{
   gsap.fromTo(document.getElementsByClassName("custom"),{
    y:-155
   },{
    y:0,
    duration:2.5,
    scrollTrigger:{
      trigger:imageRef.current,
      scroller:"body",
      start:"-80% top",
      end:"bottom bottom",
      scrub:1.5,
     
    },
    stagger: 2
   })
 },[])
  return (
    <div className="w-full h-[160vh] md:h-[100vh] ">
      <div className="flex flex-col h-[20%]  items-center justify-center gap-3 text-center">
        <h5 className=" font-semibold text-2xl md:text-3xl ">Plan your trip now</h5>
        <h1 className="font-extrabold text-4xl md:text-5xl">Quick & easy car <span className="text-orange-500">Rental</span></h1>
      </div>
      <div className="flex w-full h-[80%]  items-center justify-between  lg:justify-center  flex-col text-center md:flex-row ">
        <div className="flex flex-col items-center justify-center  w-3/4 md:w-1/4 ">
          <div className="overflow-hidden">
             <img src={icon1} ref={imageRef} className="custom"/>
          </div>
            <h4 className="font-bold text-2xl" >Select Car</h4>
            <p className="w-full md:w-3/5 text-gray-500 font-semibold">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/4">
        <div className="overflow-hidden">
            <img src={icon2} className="custom"/>
            </div>
            <h4 className="font-bold text-2xl">Contact Operator</h4>
            <p className="w-4/5 md:w-3/5 text-gray-500 font-semibold">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
  
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/4"> 
        <div className="overflow-hidden p-2">
            <img src={icon3} className="custom"/>
            </div>
            <h4 className="font-bold text-2xl">Let's Drive</h4>
            <p className="w-4/5 md:w-3/5 text-gray-500 font-semibold">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
        </div>
    </div>
  )
}

export default Feature