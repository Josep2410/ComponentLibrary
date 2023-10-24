import React from 'react'

export default function Badge({children, style, color}){
  return(
    <span className={`badge  ${style} ${color}`}>
      {children}
    </span>
  )
}