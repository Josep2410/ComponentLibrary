import React from 'react'
import DisplayBadges from './components/DisplayBadges'
import DisplayBanners from './components/DisplayBanners'
import DisplayCards from './components/DisplayCards'
import DisplayTestimonials from './components/DisplayTestimonials'
import DisplayPortal from './components/DisplayPortal'

import './App.css'
import './styles/colors.css'

function App() {

  return (
    <>
     <DisplayBadges />
      <DisplayBanners/>
      <DisplayCards/>
      <DisplayTestimonials/>
      <DisplayPortal/>
    </>
  )
}

export default App
