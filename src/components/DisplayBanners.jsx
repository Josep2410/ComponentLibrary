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
       {/* -------------------Success Banner------------------- */}
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Success</div>
        <div className='col-5'>
        <Banner style='success'>
        <svg  className='icon'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#34D399"/>
        </svg>
          <h6>Congratulatons!</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nobis sed corrupti quo placeat doloremque.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='success'>
          <svg  className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#34D399"/>
          </svg>
            <h6>Congratulations!</h6>
          </Banner>
        </div>
      </div>
      {/* -------------------Warning Banner-------------------  */}
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Warning</div>
        <div className='col-5'>
        <Banner style='warning'>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z" fill="#FBBF24"/>
        </svg>
          <h6>Attention</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos vel ex, sunt deserunt vero.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='warning'>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z" fill="#FBBF24"/>
          </svg>
            <h6>Attention</h6>
          </Banner>
        </div>
      </div>
       {/* -------------------Warning Banner------------------- */}
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Error</div>
        <div className='col-5'>
        <Banner style='error'>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#F87171"/>
        </svg>
          <h6>There is a problem with your application</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nobis sed corrupti quo placeat doloremque.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='error'>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#F87171"/>
          </svg>
            <h6>There is a problem with your application</h6>
          </Banner>
        </div>
      </div>
       {/* -------------------Neutral Banner------------------  */}
      <br />
      <div className='row bannerRow'>
        <div className='permaMarker col-2'>Neutral</div>
        <div className='col-5'>
        <Banner style='neutral'>
        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#60A5FA"/>
        </svg>
          <h6>Update available</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor molestias laborum maiores modi animi beatae deleniti aspernatur.</p>
        </Banner>
        </div>
        <div className='col-5 single-line'>
          <Banner style='neutral'>
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#60A5FA"/>
        </svg>
            <h6>Update available</h6>
          </Banner>
        </div>
      </div>
    </section>
    
  )
}