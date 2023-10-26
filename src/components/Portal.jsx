import React from 'react'
import {createPortal} from 'react-dom'
import Banner from './Banner'

export default function Portal({children, style, value = false }){



  if(value){
    return(
      <>
        {createPortal(
        <Banner style={style} >
           {children} 
        </Banner>, document.getElementById('portal'))}
      </>
    )
  }
  else return null




}