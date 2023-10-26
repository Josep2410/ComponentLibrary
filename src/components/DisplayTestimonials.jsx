import React from 'react'
import { TestimonialWithImage as TWI, TestimonialWithoutImage  as TWOI} from './Testimonials'
import '../styles/testimonials/testimonial.css'
import {startingQuotesIcon, workcationLogo} from '../icons/icons'

export default function DisplayTestimonials(){
  return(
    <section className='container test-section'>
      <h1 className='permaMarker'>Testimonials</h1>
      <br />
      <br />
        <TWI>
          <img src="https://www.andygreenwell.com/wp-content/uploads/2022/06/business-office-headshots_112158.jpg" alt="" className='img-container'/>
          <div className='info'>
            {startingQuotesIcon}
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, quod pariatur quos repellat ad. Unde sequi, doloribus facere quisquam eos molestiae at quis officia?</p>
            <span>
              <p className='name'>Jason Bracksonworth</p>
              <p className='role'>Lead Technician</p>
            </span>
          </div>
        </TWI>
        <br />
        <br />
        <br />
        <TWOI >
          <div className='withoutImage-box'>
          {workcationLogo}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur est fuga repellendus culpa atque aliquid necessitatibus cupiditate. Eos aspernatur eum impedit sit rem!</p>
          <p className='role'><strong>Jason Brasonwork </strong>/ Lead Technician</p>
          </div>
        </TWOI>
    </section>
  )
}