import React from 'react'
import DisplayBadges from './components/DisplayBadges'
import DisplayBanners from './components/DisplayBanners'
import DisplayCards from './components/DisplayCards'
import './App.css'
import './styles/colors.css'

function App() {

  return (
    <>
     <DisplayBadges />
      <DisplayBanners/>
      <DisplayCards/>
    </>
  )
}

export default App
