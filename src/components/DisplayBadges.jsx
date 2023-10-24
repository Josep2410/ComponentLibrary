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
      
      <div className='oneLiner'>
        <div className='title'><span>Square</span></div>
        <div className='box'>{squareBadges}</div>
      </div>
      <div className='oneLiner'>
        <div className='title'><span>Pill</span></div>
        <div className='box'>{pillBadges}</div>
      </div>
      
    </section>
  )
}