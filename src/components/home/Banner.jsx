import React from 'react'
import { Link} from 'react-router-dom'

const Banner = ({title}) => {
  return (
    <div className={`w-full flex items-center pl-9 h-[10vh] text-lg font-bold `}>
      <h1> <Link to="/">HOME </Link><span className="text-orange-500 text-3xl font-semibold">/</span><span className="ml-2 text-xl">{title}</span> </h1>
    </div>
  )
}

export default Banner