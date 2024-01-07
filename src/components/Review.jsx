import React from 'react'
// https://th.bing.com/th/id/R.3e8e3d4a4fcf7e22801545d5e765dee2?rik=J9GW8RyHc21Phw&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-17%2fGanesh-Gaitonde-HD-Desktop-Wallpaper-44543.jpg&ehk=FZfXq13%2fWeMJyC1iTSkm0Z210CsklBs6IGfevPzdRXE%3d&risl=&pid=ImgRaw&r=0
const Review = ({text,name,loc,img,i}) => {
  return (
    <div className={`w-3/4 md:w-[500px] lg:h-fit p-8 bg-slate-100 lg:block ${i==0 && "hidden"}`}>
        <div className="w-full h-3/5 pb-6 ">
            <p className="font-semibold text-black text-lg  sm:text-2xl">"{text}"</p>
        </div>
        <div className="w-full h-2/5  flex">
           <div className="w-4/5 h-full flex">
           <img src={img} alt='prf-pic' className="w-20 aspect-square object-cover rounded-full"/>
           <div className="w-1/2 h-full ml-2">
            <p className="font-black mt-3">{name}</p>
            <p>{loc}</p>
           </div>
           </div>
           <div className="w-1/5 h-full flex items-center justify-center">
            <p className="text-5xl font-black text-orange-600 text-center">99</p>
           </div>
        </div>
    </div>
  )
}

export default Review
