import React from 'react'
import Badge from './Badge'
import '../styles/badges/badges.css'

export default function DisplayBadges(){

  const styles = ['square', 'pill']
  const colors = ['grey', 'red', 'yellow', 'green', 'blue', 'indigo','purple', 'pink']

  function makeBadge(style, color){
    return {style, color}
  }

  const squareBadges = colors.map(color => {
    return (makeBadge(styles[0], color))
  }).map(badge => <Badge style={badge.style} color={badge.color} key={badge.color}>Badge</Badge>)

  const pillBadges = colors.map(color => {
    return (makeBadge(styles[1], color))
  }).map(badge => <Badge style={badge.style} color={badge.color} key={badge.color}>Badge</Badge>)


  return(
    <section className='container'>
      <h1 >Badges</h1>
      <div className='row oneLiner'>
        <div className='col-2 label' ><span>Squares</span></div>
        <div className='col-10 box'>{squareBadges}</div>
      </div>
      <br />
      <div className='row oneLiner'>
        <div className='col-2 label' ><span>Pill</span></div>
        <div className='col-10 box'>{pillBadges}</div>
      </div>
    </section>
  )
}