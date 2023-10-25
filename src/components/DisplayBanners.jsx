import React from 'react'
import Banner from './Banner'
import '../styles/banners/banners.css'

export default function DisplayBanners(){
  return (
    <section className='container'>
      <h1 className='permaMarker'>Banners</h1>
      <div className='row columns'>
        <div className='col-7 permaMarker'>Multi-Line</div>
        <div className='col-5 permaMarker'>Single Line</div>
      </div>
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Success</div>
        <div className='col-5'>
        <Banner style='success'>
          <h6>Congratulatons!</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nobis sed corrupti quo placeat doloremque.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='success'>
            <h6>Congratulations!</h6>
          </Banner>
        </div>
      </div>
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Warning</div>
        <div className='col-5'>
        <Banner style='warning'>
          <h6>Attention</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos vel ex, sunt deserunt vero.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='warning'>
            <h6>Attention</h6>
          </Banner>
        </div>
      </div>
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Error</div>
        <div className='col-5'>
        <Banner style='error'>
          <h6>There is a problem with your application</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nobis sed corrupti quo placeat doloremque.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='error'>
            <h6>There is a problem with your application</h6>
          </Banner>
        </div>
      </div>
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Neutral</div>
        <div className='col-5'>
        <Banner style='neutral'>
          <h6>Update available</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor molestias laborum maiores modi animi beatae deleniti aspernatur.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='neutral'>
            <h6>Update available</h6>
          </Banner>
        </div>
      </div>
    </section>
    
  )
}