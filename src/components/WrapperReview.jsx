import React from 'react'
import Review from '../components/Review'
import { review } from '../constants'

const WrapperReview = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center lg:justify-around">
     {review.map((e,i)=>(
      <Review name={e.name} loc={e.loc} img={e.img} text={e.text} i={i}/>
     ))}
    </div>

  )
}

export default WrapperReview