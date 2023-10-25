import React from 'react'

export default function Banner({children, style}){
  return(
    <div className={`banner ${style}`}>
      {children}
    </div>
  )
}