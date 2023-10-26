import React from 'react'
import Cards from './Cards'
import '../styles/cards/cards.css'


export default function DisplayCards(){
  return(
    <section className='container'>
      <h1 className='permaMarker'>cards</h1>
      <main className='row cardsContainer'>
          <span id='float' className='permaMarker'>Hover</span>
          <Cards title='Easy Deployment' iconBGColor='green'>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus aut. Lorem, ipsum dolor.
           </p>          
          </Cards>
      </main>
    </section>
  )
}