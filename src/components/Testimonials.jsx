import React from 'react'

function TestimonialWithImage({children}){
  return(
    <div className='testimonial-container withImage'>
      {children}
    </div>
  )
}

function TestimonialWithoutImage({children}){
  return(
    <div className='testimonial-container withoutImage'>
      {children}
    </div>
  )
}


export {TestimonialWithImage, TestimonialWithoutImage}