import React from 'react'
import {cardIcon} from '../icons/icons'

export default function Cards({children, title , iconBGColor = '#3F75FE'} ){
  return (
    <>
    {/* --------CARD--------- */}
    <div className='col-5 card'>
      <div className='icon-Container' style={{backgroundColor : iconBGColor}}>
       { cardIcon}
      </div>
      <h5>{title}</h5>
      {children}
      {/* ------Render exact copy of the above card */}
    </div>
    <div className='col-5 card right'>
      <div className='icon-Container' style={{backgroundColor : iconBGColor}}>
       { cardIcon}
      </div>
      <h5>{title}</h5>
      {children}
    </div>
   
    </>
  )
}